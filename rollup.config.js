'use strict';

const buble = require('rollup-plugin-buble');
const butternut = require('rollup-plugin-butternut');
const common = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');

module.exports = [
  {
    input: 'lib/index.js',
    output: {
      name: 'lib',
      file: 'dist/lib.esm.js',
      format: 'es',
    },
    plugins: [ resolve(), common() ],
  },
  {
    input: 'lib/index.js',
    output: {
      name: 'lib',
      file: 'dist/lib.js',
      format: 'umd',
    },
    plugins: [ resolve(), common(), buble() ],
  },
  {
    input: 'lib/index.js',
    output: {
      name: 'lib',
      file: 'dist/lib.min.js',
      format: 'umd',
    },
    plugins: [ resolve(), common(), buble(), butternut({ check: true }) ],
  },
];
