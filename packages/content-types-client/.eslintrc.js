module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'editorconfig',
    'import',
    'simple-import-sort',
    'sonarjs',
    'unused-imports'
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    '@typescript-eslint/brace-style': ['error', '1tbs', { 'allowSingleLine': false }],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_' }],
    'array-bracket-newline': ['error', 'always'],
    'array-bracket-spacing': 'error',
    'array-element-newline': ['error', 'always'],
    'block-spacing': ['error', 'always'],
    'brace-style': 'off',
    'camelcase': 'error',
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'always-multiline'
    }],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'consistent-return': 'error',
    'curly': ['error'],
    'default-case': 'error',
    'eqeqeq': 'error',
    'import/no-commonjs': 'error',
    'import/no-default-export': 'error',
    'indent': ['error', 2],
    'no-console': 'error',
    'no-extra-parens': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 0 }],
    'no-multi-spaces': 'error',
    'no-param-reassign': ['off', { 'props': true }],
    'no-return-await': 'error',
    'no-shadow': 'off',
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': 'error',
    'operator-linebreak': ['error', 'before', { 'overrides': { '=': 'after' } }],
    'quote-props': ['error', 'as-needed'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sonarjs/cognitive-complexity': ['error', 9],
    'space-before-blocks': 'error',
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'unused-imports/no-unused-imports': 'error',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:editorconfig/noconflict',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  settings: {
    'react': {
      'version': 'detect'
    }
  }
}
