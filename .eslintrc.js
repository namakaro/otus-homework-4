//Помимо любых шаблонов в .eslintignore файле, ESLint всегда следует нескольким неявным правилам игнорирования, даже если --no-ignore флаг передан. 
//Неявные правила заключаются в следующем: node_modules/ игнорируется. Поэтому не добавила его в .eslintignore

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

/*
module.exports = {
  env: {
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 
          "plugin:@typescript-eslint/recommended",
          "prettier/@typescript-eslint",
          "plugin:prettier/recommended"
          ////"plugin:react/recommended",
          //"plugin:jest/recommended"
        ],
  //parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint',
    ecmaVersion: 2018
  },
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-var-requires": ["off"]
  },
  overrides: [
    {
      files: ["webpack.config.js"],
      rules: {
        "@typescript-eslint/no-var-requires": ["off"]
      }
    }
  ]
};*/
