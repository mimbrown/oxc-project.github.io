# Oxlint Configuration File

This configuration is aligned with ESLint v8's configuration schema (`eslintrc.json`).

Usage: `oxlint -c oxlintrc.json --import-plugin`

::: danger NOTE

Only the `.json` format is supported. You can use comments in configuration files.

:::

Example

`.oxlintrc.json`

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["import", "unicorn"],
  "env": {
    "browser": true
  },
  "globals": {
    "foo": "readonly"
  },
  "settings": {},
  "rules": {
    "eqeqeq": "warn",
    "import/no-cycle": "error"
  }
}
```

## categories

type: `object`

Configure an entire category of rules all at once.

Rules enabled or disabled this way will be overwritten by individual rules in the `rules` field.

# Example

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "categories": {
    "correctness": "warn"
  },
  "rules": {
    "eslint/no-unused-vars": "error"
  }
}
```

### categories.correctness

### categories.nursery

### categories.pedantic

### categories.perf

### categories.restriction

### categories.style

### categories.suspicious

## env

type: `Record<string, boolean>`

Predefine global variables.

Environments specify what global variables are predefined. See [ESLint's list of environments](https://eslint.org/docs/v8.x/use/configure/language-options#specifying-environments) for what environments are available and what each one provides.

## globals

type: `Record<string, string>`

Add or remove global variables.

For each global variable, set the corresponding value equal to `"writable"` to allow the variable to be overwritten or `"readonly"` to disallow overwriting.

Globals can be disabled by setting their value to `"off"`. For example, in an environment where most Es2015 globals are available but `Promise` is unavailable, you might use this config:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "env": {
    "es6": true
  },
  "globals": {
    "Promise": "off"
  }
}
```

You may also use `"readable"` or `false` to represent `"readonly"`, and `"writeable"` or `true` to represent `"writable"`.

## plugins

type: `string[]`

default: `["react", "unicorn", "typescript", "oxc"]`

## rules

type: `object`

See [Oxlint Rules](https://oxc.rs/docs/guide/usage/linter/rules.html)

## settings

type: `object`

Shared settings for plugins

### settings.jsdoc

type: `object`

#### settings.jsdoc.augmentsExtendsReplacesDocs

type: `boolean`

default: `false`

Only for `require-(yields|returns|description|example|param|throws)` rule

#### settings.jsdoc.exemptDestructuredRootsFromChecks

type: `boolean`

default: `false`

Only for `require-param-type` and `require-param-description` rule

#### settings.jsdoc.ignoreInternal

type: `boolean`

default: `false`

For all rules but NOT apply to `empty-tags` rule

#### settings.jsdoc.ignorePrivate

type: `boolean`

default: `false`

For all rules but NOT apply to `check-access` and `empty-tags` rule

#### settings.jsdoc.ignoreReplacesDocs

type: `boolean`

default: `true`

Only for `require-(yields|returns|description|example|param|throws)` rule

#### settings.jsdoc.implementsReplacesDocs

type: `boolean`

default: `false`

Only for `require-(yields|returns|description|example|param|throws)` rule

#### settings.jsdoc.overrideReplacesDocs

type: `boolean`

default: `true`

Only for `require-(yields|returns|description|example|param|throws)` rule

#### settings.jsdoc.tagNamePreference

type: `object`

default: `{}`

### settings.jsx-a11y

type: `object`

#### settings.jsx-a11y.components

type: `Record<string, string>`

default: `{}`

#### settings.jsx-a11y.polymorphicPropName

type: `[
  string,
  null
]`

### settings.next

type: `object`

#### settings.next.rootDir

### settings.react

type: `object`

#### settings.react.formComponents

type: `array`

default: `[]`

##### settings.react.formComponents[n]

#### settings.react.linkComponents

type: `array`

default: `[]`

##### settings.react.linkComponents[n]
