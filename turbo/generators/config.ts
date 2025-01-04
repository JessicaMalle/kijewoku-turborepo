import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("Create a new React component package", {
    description: "Creates a new package for React components.",
    prompts: [
      {
        type: "input",
        name: "packageName",
        message: "Enter the name of the new React component package:",
        validate: (input) =>
          input?.trim() ? true : "The package name cannot be empty.",
      },
    ],
    actions: [
      {
        type: "addMany",
        base: "templates/react-pkg-base",
        destination: "packages/{{kebabCase packageName}}",
        templateFiles: "templates/react-pkg-base/**/*",
        globOptions: {
          dot: true,
        },
      },
    ],
  });
}
