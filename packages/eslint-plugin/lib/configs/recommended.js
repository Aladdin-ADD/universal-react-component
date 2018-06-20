'use strict';
module.exports = {
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
