module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "overrides": [
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "ignorePatterns": ["*.test.js"],
  "rules": {
    "object-curly-spacing": ["warn", "always"],
    "jsx-quotes": ["warn", "prefer-double"],
    "indent": ["error", 2]
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
