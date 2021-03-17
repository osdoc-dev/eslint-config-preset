module.exports = {
  extends: ['plugin:react/recommended', '@osdoc-dev/lint-preset-ts'],
  settings: {
    react: {
      version: '17.0',
    },
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
  },
};
