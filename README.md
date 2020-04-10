# neutrinojs + preact + typescript

This is how I was able to create a neutrinojs project for preact using
typescript.

## Dependencies

To make neutrinojs work with typescript two additional dependencies are needed:

- [neutrino-typescript](https://github.com/davidje13/neutrino-typescript)
- [neutrino-typescript-eslint](https://github.com/davidje13/neutrino-typescript-eslint)

## Steps for `yarn run start`

1. Create a new neutrinojs with the following choices
```shell
$  yarn create @neutrinojs/project neutrino-preact-typescript-example

> A web or Node.js application
> Preact
> Jest
> Airbnb style rules
```

2. Change directory into project
```shell
$ cd neutrino-preact-typescript-example
```

3. Add dependencies for typescript
```shell
$ yarn add --dev typescript
$ yarn add --dev git+https://github.com/davidje13/neutrino-typescript#semver:^1.0.10
$ yarn add --dev git+https://github.com/davidje13/neutrino-typescript-eslint#semver:^1.0.5
```

4. Add a tsconfig.json file
```json
{
  "compilerOptions": {
    "sourceMap": true,
    "module": "commonjs",
    "target": "es5",
    "jsx": "react"
  },
  "include": [
    "src",
    "test"
  ]
}
```

5. Extend the neutrinorc.js file
```javascript
const airbnb = require('@neutrinojs/airbnb');
const preact = require('@neutrinojs/preact');
const jest = require('@neutrinojs/jest');
const typescript = require('neutrino-typescript');
const typescriptLint = require('neutrino-typescript-eslint');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    typescript(),
    typescriptLint(),
    airbnb({
      eslint: {
        baseConfig: {
          rules: {
            'react/jsx-filename-extension': 'off',
            'import/extensions': [
              'error',
              'ignorePackages',
              {
                'js': 'never',
                'jsx': 'never',
                'ts': 'never',
                'tsx': 'never'
              }
            ]
          }
        }
      }
    }),
    preact({
      html: {
        title: 'neutrino-preact-typescript-example'
      },
      babel: {
        plugins: [
           'transform-react-jsx',
        ],
      }
    }),
    jest(),
  ],
};
```

6. Rename src files from .jsx to .tsx
```shell
mv src/index.jsx src/index.tsx
mv src/App.jsx src/App.tsx
```

7. Add jsx comment at the top of each .tsx file
```javascript
/** @jsx h */
```

8. Run `yarn run start`
```shell
$ yarn run start
```

## Steps for `yarn run lint`

1. Edit package.json
```json
{
  ...
  "scripts": {
    ...
    "lint": "eslint --cache --format codeframe --ext mjs,jsx,js,ts,tsx src test"
  },
  ...
```

2. Run `yarn run lint`
```shell
$ yarn run lint
```

## Steps for `yarn run lint`

1. Edit package.json
```json
{
  ...
  "scripts": {
    ...
    "lint": "eslint --cache --format codeframe --ext mjs,jsx,js,ts,tsx src test"
  },
  ...
```

2. Run `yarn run lint`
```shell
$ yarn run lint
```

## Steps for `yarn run test`

1. Rename test file from .js to .ts
```shell
$ mv test/simple_test.js test/simple_test.ts
```

3. Add dependencies for typescript
```shell
$ yarn add --dev @types/jest
```

2. Run `yarn run test`
```shell
$ yarn run test
```
