const fs = require("node:fs");
const path = require("node:path");

/**
 * @param {string} rootDir
 * @returns {string[]}
 */
const getSubfolders = (rootDir) => {
    if (!fs.existsSync(rootDir)) {
        console.warn(
            `The directory ${rootDir} does not exist. It will be created.`,
        );
        fs.mkdirSync(rootDir, { recursive: true });
        return [];
    }

    return fs
        .readdirSync(rootDir, { withFileTypes: true })
        .filter((entry) => entry.isDirectory())
        .map((entry) => entry.name);
};

module.exports = (plop) => {
    const srcFolder = path.resolve(__dirname, "../../src");

    plop.setGenerator("Create a React component for hooks", {
        description: "Adds a new React component in hooks",
        prompts: [
            {
                type: "input",
                name: "name",
                message: "What is the name of the component?",
            },
            {
                type: "list",
                name: "directory",
                message:
                    "Choose an existing sub-folder, create a new one, or use src as root:",
                choices: () => {
                    const subfolders = getSubfolders(srcFolder);
                    return [...subfolders, "(Create new folder)", "(Use src as root)"];
                },
            },
            {
                type: "input",
                name: "newDirectory",
                message: "Enter the name for the new folder:",
                when: (answers) => answers.directory === "(Create new folder)",
                validate: (input) => {
                    if (/^[a-zA-Z0-9/_-]+$/.test(input)) return true;
                    return "Please provide a valid folder name (letters, numbers, underscores, slashes).";
                },
            },
        ],
        actions: (data) => {
            let packageExportContent = [];

            if (data.directory === "(Create new folder)") {
                data.directory = data.newDirectory;
                const newFolderPath = path.join(srcFolder, data.newDirectory);

                if (!fs.existsSync(newFolderPath)) {
                    fs.mkdirSync(newFolderPath, { recursive: true });

                    packageExportContent = [
                        {
                            type: "append",
                            path: "package.json",
                            pattern: /"exports": {(?<insertion>)/g,
                            template:
                                '    "./{{directory}}": "./src/{{directory}}/index.ts",',
                            unique: true,
                        },
                    ];
                }
            } else if (data.directory === "(Use src as root)") {
                data.directory = undefined;
            }

            return [
                {
                    type: "add",
                    path: "src/{{directory}}/{{kebabCase name}}.tsx",
                    templateFile: "templates/component.hbs",
                },
                {
                    type: "add",
                    path: "src/{{directory}}/index.ts",
                    templateFile: "templates/index.hbs",
                    skipIfExists: true,
                },
                {
                    type: "append",
                    path: "src/{{directory}}/index.ts",
                    template:
                        'export { default as {{pascalCase name}} } from "./{{kebabCase name}}.tsx";',
                },
                ...packageExportContent,
            ];
        },
    });
};
