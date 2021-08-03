module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    cy: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'plugin:cypress/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-console': 0,
    'import/no-unresolved': 0,
    'no-undef': 0,
    'import/extensions': 0,
    'react/prop-types': 0,
    'no-use-before-define': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-shadow': [2, { builtinGlobals: false, hoist: 'functions', allow: [] }],
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    // 'react/jsx-filename-extension': {
    //   extensions: ['.jsx', '.tsx'],
    // },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
