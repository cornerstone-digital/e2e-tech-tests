const OFF = 0;
const WARN = 1;
const ERROR = 2;

/**
 * @type {import('eslint').Linter.Config}
 * @see https://eslint.org/docs/user-guide/configuring
 **/
module.exports = {
  root: true,
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:sonarjs/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  plugins: [
    'simple-import-sort',
    'eslint-plugin-tsdoc',
    'unused-imports',
    'import',
    'sonarjs',
    '@typescript-eslint',
  ],
  rules: {
    'tsdoc/syntax': ERROR,
    '@typescript-eslint/naming-convention': [
      ERROR,
      { format: ['StrictPascalCase'], selector: 'typeLike' },
    ],
    '@typescript-eslint/no-unused-vars': [ERROR, { argsIgnorePattern: '^_|next' }],
    '@typescript-eslint/no-use-before-define': ERROR,
    '@typescript-eslint/padding-line-between-statements': [
      ERROR,
      { blankLine: 'always', prev: '*', next: ['interface', 'type'] },
    ],
    'no-console': ERROR,
    'simple-import-sort/exports': ERROR,
    'import/no-extraneous-dependencies': OFF,
  },
  settings: {
    jsdoc: {
      mode: 'typescript',
    },
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
};
