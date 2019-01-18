const config = {
  rules: {
    'object-curly-spacing': [
      'error',
      'always'
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