module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
        'prettier',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'skillforce-fsd-plugin',
        'unused-imports',
    ],
    rules: {
        // 0 - off,1-warning, 2 - error

        // commented because of using prettier instead
        // 'react/jsx-indent': [2, 4],
        // 'react/jsx-indent-props': [2, 4],
        // indent: [2, 4],
        'react/jsx-max-props-per-line': ['error', { maximum: 3 }],
        'max-len': [
            2,
            {
                code: 140,
                tabWidth: 1,
                ignoreComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'import/no-unresolved': 0,
        'import/prefer-default-export': 0,
        'import/extensions': 0,
        '@typescript-eslint/no-empty-interface': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-import-module-exports': [
            'error',
            {
                exceptions: ['**/*/webpack.config.ts'],
            },
        ],
        'react/require-default-props': 0,
        'react/function-component-definition': 0,
        'no-undef': 0,
        'react/no-array-index-key': 0,
        'react/jsx-props-no-spreading': 'off',
        'react/react-in-jsx-scope': 0,
        'no-underscore-dangle': 0,
        'no-shadow': 0,
        'quote-props': 0,
        'func-names': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 2,
        'no-param-reassign': 0,
        'skillforce-fsd-plugin/path-checker': ['error', { alias: '@' }],
        'skillforce-fsd-plugin/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            },
        ],
        'skillforce-fsd-plugin/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: [
                    '**/*.test.*',
                    '**/StoreDecorator.tsx',
                    '**/*.story.*',
                ],
            },
        ],
        'no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
};
