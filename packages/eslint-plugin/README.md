# @urc/eslint-plugin

eslint plugin for URC(universal react component)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-urc`:

```
$ npm install eslint-plugin-urc --save-dev
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
        "urc/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





