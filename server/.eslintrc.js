module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: "eslint:recommended",
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  rules: {
    "no-console": "off",
    indent: ["error", "tab"],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: "off",
    "no-unused-vars": "off"
  }
};
