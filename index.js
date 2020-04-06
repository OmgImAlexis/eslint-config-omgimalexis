const spaceBeforeFunctionParam = [
    'error',
    'never'
];

const config = {
    rules: {
        'object-curly-spacing': [
            'error',
            'always'
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
    },
    overrides: [
        {
            files: [
                '**/*.js'
            ],
            rules: {
                'space-before-function-paren': spaceBeforeFunctionParam,
            }
        },
        {
            files: [
                '**/*.ts'
            ],
            rules: {
                '@typescript-eslint/space-before-function-paren': spaceBeforeFunctionParam
            }
        }
    ]
};

module.exports = config;
