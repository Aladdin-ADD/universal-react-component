'use strict';
// TODO: https://eslint.org/docs/rules/no-restricted-globals
module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    es6: true,
  },
  plugins: [
    '@urc/eslint-plugin',
  ],
  rules: {
    'render-return': 2,
  },
};
