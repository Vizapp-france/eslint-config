# @vizapp-france/eslint-config

## Installation

### Install ESLint

```
npm i -D eslint
```

### Install the package

```
npm i -D @vizapp-france/eslint-config
```

## Setup

1. Create the following file `.eslintrc.js`

   ```javascript
   module.exports = require('@vizapp-france/eslint-config');
   ```

2. Add the following to `scripts` in `package.json`

   ```
   "lint:js": "eslint ."
   ```

## Running

  ```
  npm run lint:js
  ```

## Related repos

- https://github.com/vizapp-france/prettier-config
