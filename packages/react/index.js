module.exports = {
  extends: ['plugin:react/recommended', '@osdoc-dev/eslint-config-preset-ts'],
  settings: {
    react: {
      version: '17.0',
    },
  },
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
  },
};
