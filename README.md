# @vizapp-france/eslint-config

## Installation

### Install ESLint

```
npm i -D eslint eslint-plugin-node eslint-config-node
```

```
npx install-peerdeps --dev eslint-config-airbnb-base
```

### Install the package

```
npm i -D @vizapp-france/eslint-config
```

## Running

As this package only provides the ESLint configuration, it is assumed you
already have `ESLint` installed in your project.

- It's recommended to install the relevant Editor Addons/Plugins

- It's recommended to add a ESLint script to `package.json`. An example one
  is:

  ```json
  scripts: {
    "lint:js": "eslint -c node_modules/@vizapp-france/eslint-config/.eslintrc.json '**/*.js'"
  }
  ```

  You can then run the following, to automatically format your project's code:

  ```
  npm run lint:js
  ```

## Related repos

- https://github.com/vizapp-france/prettier-config
- https://github.com/vizapp-france/eslint-config
- https://github.com/zestia/stylelint-config
