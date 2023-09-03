/* eslint-env node */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  ignorePatterns: ['node_modules/*', 'postcss.config.js'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'react-refresh', 'simple-import-sort', 'import', 'prettier'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'import/no-unresolved': [
      'error',
      {
        ignore: ['.svg'],
      },
    ],
    'react/prop-types': 'off',
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['@/features/*/*'],
            message:
              'Please import from the root @/features folder (e.g. @/features/ui instead of @/features/ui/button).',
          },
        ],
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/first': 'error',
    'import/default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-console': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/non-nullable-type-assertion-style': ['off'],
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],

    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [
    // override "simple-import-sort" config
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages `react` related packages come first.
              ['^react', '^@?\\w'],
              // Internal packages.
              ['^(@|components)(/.*|$)'],
              // Side effect imports.
              ['^\\u0000'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.?(css)$'],
            ],
          },
        ],
      },
    },
  ],
}
