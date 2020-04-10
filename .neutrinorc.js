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
