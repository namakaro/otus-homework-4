module.exports = {
  env: {
    node: true,
    jest: true,
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  "rules": {
    "prettier/prettier": "error"
  },
  "parserOptions": {
    "sourceType": "module",
    "parser": "babel-eslint",
    "ecmaVersion": 2018
  },
  "overrides": [
    {
      "files": ["webpack.config.js"],
      "rules": {
        "@typescript-eslint/no-var-requires": ["off"]
      }
    }
  ]
};