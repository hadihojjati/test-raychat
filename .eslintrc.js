module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'dist/**', 'node_modules/**'],
  rules: {
    'prettier/prettier': 'error', // Ensure consistent formatting
    '@typescript-eslint/no-explicit-any': 'warn', // Discourage `any` but allow it temporarily
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignore unused variables starting with "_"
    '@typescript-eslint/explicit-function-return-type': 'off', // Keep this disabled for flexibility
    '@typescript-eslint/no-empty-function': 'off', // Useful for NestJS lifecycle hooks
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Optional for flexibility
  },
};
