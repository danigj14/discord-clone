module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  overrides: [],
  ignorePatterns: ["node_modules", "dist"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off", // Don't care about typing for now until I learn TypeScript
    "no-underscore-dangle": ["error", { allow: ["_id"] }], // Allow _id field from MongoDB documents
  },
};
