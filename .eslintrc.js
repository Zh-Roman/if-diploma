module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-unused-vars": "warn",
    quotes: ["error", "double"],
    "no-var": "error",
    semi: "error",
    indent: "error",
    "no-multi-spaces": "error",
    "space-in-parens": "error",
    "no-multiple-empty-lines": "error",
    "prefer-const": "error",
    "no-use-before-define": "error",
    "global-require": "off",
    "react/require-default-props": "off",
    "import/no-unresolved": "off",
    "jsx-a11y/control-has-associated-label": "off",
  },
};
