module.exports = {
  env: {
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/extensions': [
      'error',
      {
        'mjs': 'always',
      },
    ],
    'import/no-default-export': [
      'error',
    ],
    'import/prefer-default-export': [
      'off',
    ],
  },
};
