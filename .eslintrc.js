module.exports = {
  'parser': '@typescript-eslint/parser',
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': [
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-function-return-type': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/type-annotation-spacing': ['error', { 'before': false, 'after': true, overrides: { arrow: { before: true, after: true }} }],
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/prefer-interface': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/member-delimiter-style': ['error', {
      "multiline": {
          "delimiter": "comma",
          "requireLast": true
      },
      "singleline": {
          "delimiter": "comma",
          "requireLast": false
      }
    }]
  }
}
