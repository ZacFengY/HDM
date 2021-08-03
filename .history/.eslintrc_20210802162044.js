{
  "env": {
    browser: true,
    es2021: true,
  },
  "extends": "eslint-config-umi",
  "rules": {
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": 0 // Checks effect dependencies
  }
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['next', 'next/core-web-vitals', 'airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    '@next/next/no-img-element': 'off',
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": 0 // Checks effect dependencies
  },
}
