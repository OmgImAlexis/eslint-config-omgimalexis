const config = {
  rules: {
    'object-curly-spacing': [
      'error',
      'always'
    ],
    '@typescript-eslint/space-before-function-paren': [
      'error',
      'never'
    ],
    'space-before-function-paren': [
      'error',
      'never'
    ],
    'unicorn/catch-error-name': [
      'error',
      {
        name: 'error'
      }
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ]
  }
};

module.exports = config;
