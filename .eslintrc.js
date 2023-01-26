module.exports = {
  extends: ['plugin:hydrogen/recommended', 'plugin:hydrogen/typescript'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'node/no-missing-import': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/naming-convention': 'off',
  },
};
