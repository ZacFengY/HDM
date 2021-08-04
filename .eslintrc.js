module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    require.resolve('@umijs/fabric/dist/eslint'),
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 0, // Checks effect dependencies
    'no-unused-vars': 1,
  },
}
