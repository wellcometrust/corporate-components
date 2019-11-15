module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:import/warnings',
    'plugin:promise/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    'prettier',
    'import',
    'promise',
  ],
  globals: {
    document: true,
    window: true,
    process: true
  },
  rules: {
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/destructuring-assignment': 0,
    'react/no-unused-prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'import/no-extraneous-dependencies': 0,
    'prettier/prettier': 'error',
    'jsx-a11y/label-has-associated-control': [ 2, {
      labelComponents: ['SearchLabel'],
      controlComponents: ['SearchInput'],
      depth: 3,
    }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/camelcase': ['warn', { properties: 'never' }],
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
}
