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
  "rules": {
    "object-curly-spacing": ["error", "always"],
    "jsx-quotes": ["error", "prefer-double"],
    "indent": ["error", 2],
    "key-spacing": ["error", { 
      "beforeColon": false, 
      "afterColon": true, 
    }],
    "arrow-spacing": ["error", { "before": true, "after": true }],
    "block-spacing": ["error", "always"],
    "max-len": ["error", { "code": 120 }],
    "no-extra-semi": "error",
    "semi": ["error", "always"],
    "no-unreachable": "error",
    "complexity": ["error", 4]
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
};
