module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    extends: ['react-app', 'react-app/jest'],
    plugins: ['import'],
    rules: {
        camelcase: 'off',
        semi: 'warn',
        'import/prefer-default-export': 'off',
        'react/prop-types': 'off',
        'react/jsx-filename-extension': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/no-unused-prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
                js: 'never',
                jsx: 'never',
            },
        ],
        // sort for inside curly.
        'sort-imports': [
            'error',
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
            },
        ],
        // sort for imports.
        'import/order': [
            'error',
            {
                groups: [
                    ['external', 'builtin'], // Built-in types are first
                    'internal',
                    ['sibling', 'parent'], // Then sibling and parent types. They can be mingled together
                    'index', // Then the index file
                    'object',
                    // Then the rest: internal and external type
                ],
                pathGroups: [
                    {
                        pattern: '~/**',
                        group: 'internal',
                    },
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc', // sort in ascending order. Options: ["ignore", "asc", "desc"]
                    caseInsensitive: true, // ignore case. Options: [true, false]
                },
            },
        ],
        quotes: 'off',
    },
};
