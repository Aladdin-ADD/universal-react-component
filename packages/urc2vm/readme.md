<p align="center">
  <a href="https://ci.appveyor.com/api/projects/status/v562l6v4h098dvtf?svg=true">
    <img src="https://ci.appveyor.com/api/projects/status/v562l6v4h098dvtf?svg=true"
         alt="build status">
  </a>
  <a href="https://github.com/tplss/node/blob/master/LICENSE.md">
    <img src="https://img.shields.io/npm/l/rollup.svg"
         alt="license">
  </a>
  <a href="https://david-dm.org/tplss/node">
    <img src="https://david-dm.org/tplss/node/status.svg"
         alt="dependency status">
  </a>
</p>
# @ali/urc2vm

## Installation

```sh
$ npm install @ali/urc2vm
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["urc2vm"]
}
```

### Via CLI

```sh
$ babel --plugins urc2vm script.js
```

### Via Node API

```javascript
require('babel').transform('code', {
  plugins: ['urc2vm']
});
```
