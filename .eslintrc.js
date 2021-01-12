module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "@vue/standard",
    "@vue/typescript/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-multi-spaces": ["error"],
    "no-multiple-empty-lines": ["warn", { max: 1 }],
    curly: ["warn", "all"],
    "array-callback-return": ["warn"],
    "no-redeclare": ["warn"],
    eqeqeq: ["warn"],
    indent: ["error", 2],
    "linebreak-style": ["error", "windows"],
    quotes: ["warn", "double"],
    semi: ["error", "always"],
    "no-console": ["error", { allow: ["log", "warn", "error"] }],
    "comma-dangle": ["error", "always-multiline"],
    "object-curly-spacing": ["error", "always"],
    "arrow-parens": ["warn", "as-needed"],
  },
};
