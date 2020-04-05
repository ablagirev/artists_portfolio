module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  plugins: ['prettier', 'react'],
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off'
  }
}
