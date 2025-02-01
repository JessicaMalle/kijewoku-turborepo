# @kijewoku/hooks

This package is a base React component library within a Turborepo.

## Installation

To install the package, run:

```sh
npm install @kijewoku/hooks
```

## Scripts

- `lint`: Lint the codebase using ESLint.
- `generate:component`: Generate a new React component using Turbo.
- `check-types`: Check TypeScript types.

## Generating a New Component

To generate a new React component, run:

```sh
npm run generate:component
```

Follow the prompts to create a new component in the desired directory.

## Usage

### useGoldenRatio

The useGoldenRatio hook calculates dimensions based on the Fibonacci sequence scaled to the provided width and height.
This can be useful for creating layouts that follow the golden ratio.

#### Parameters

* width (number): The width to scale the Fibonacci sequence to.
* height (number): The height to scale the Fibonacci sequence to.

#### Returns
* f7i (object): An object where each key is a Fibonacci number and the value is an object containing the scaled width and height.
* get (function): A function that takes a Fibonacci term and returns the corresponding dimensions.

#### Example

```javascript
import { useGoldenRatio } from '@kijewoku/hooks';

const MyComponent = () => {
  const { width, height } = { width: 800, height: 600 }; // Example dimensions
  const { f7i, get } = useGoldenRatio({ width, height });

  const dimensions = get(1); // Get dimensions for Fibonacci term 1

  return (
    <div>
      <p>Width: {dimensions.width}</p>
      <p>Height: {dimensions.height}</p>
    </div>
  );
};
```

## License

This project is licensed under the MIT License.
