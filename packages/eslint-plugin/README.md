# @urc/eslint-plugin

eslint plugin for URC(universal react component)

## Installation

```bash
$ npm i eslint eslint-plugin-urc -D
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-urc` globally.

## Usage

Add `urc` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "urc"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "urc/render-return": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





