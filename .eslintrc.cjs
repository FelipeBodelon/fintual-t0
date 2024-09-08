module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        project: 'tsconfig.json',
      },
    },
  },
  env: {
    browser: false,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:prettier/recommended', // Make sure this is always the last element in the array.
  ],
  plugins: ['@typescript-eslint', 'simple-import-sort', 'prettier'],
  rules: {
    'prettier/prettier': ['off', {}, { usePrettierrc: true }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'simple-import-sort/imports': 'off',
    'simple-import-sort/exports': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
  },
};
