module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'import/prefer-default-export': 'off',
    'linebreak-style': 0,
    // 'react/button-has-type': [disable],
    'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 0,
    'react/display-name': 2,
    'react/jsx-key': 2,
    'react/jsx-no-comment-textnodes': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-target-blank': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-uses-vars': 2,
    'react/no-children-prop': 2,
    'react/no-danger-with-children': 2,
    'react/no-deprecated': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-find-dom-node': 2,
    'react/no-is-mounted': 2,
    'react/no-render-return-value': 2,
    'react/no-string-refs': 2,
    'react/no-unescaped-entities': 2,
    'react/no-unknown-property': 2,
    'react/no-unsafe': 0,
    'react/prop-types': 0,
    'react/require-render-return': 2,
    'quotes': ['error', 'single',{ 'allowTemplateLiterals': true }],
    'jsx-quotes': ['error', 'prefer-double'],
    'indent':['warn',2],
    'semi':['warn','always']

  }
};
