module.exports = {
   env: {
      browser: true,
      es2022: true,
   },
   extends: [
      'airbnb',
      'airbnb/hooks',
      'airbnb-typescript',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
   ],
   overrides: [],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: 'tsconfig.json',
      tsconfigRootDir: '.',
   },
   ignorePatterns: ['vite.config.ts'],
   plugins: ['react', '@typescript-eslint', 'prettier'],
   rules: {
      'react/react-in-jsx-scope': 0,
   },
};
