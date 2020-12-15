module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    semi: ['error', 'never'],
    'max-len': [1, 200],
    'no-console': 0,
    'no-anonymous-default-export': 0,
    'no-underscore-dangle': 'off',
    'operator-linebreak': 'off',
    'no-param-reassign': 'off',
  },
}
