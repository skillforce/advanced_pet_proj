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
    ],
    overrides: [
    ],
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
    ],
    rules: {
    // 0 - off,1-warning, 2 - error

        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/no-unresolved': 0,
        'import/prefer-default-export': 0,
        'no-unused-vars': 1,
        'import/extensions': 0,
        '@typescript-eslint/no-empty-interface': 0,
        'import/no-extraneous-dependencies': 0,
        'react/require-default-props': 0,
        'react/function-component-definition': 0,
        'react/jsx-props-no-spreading': 1,
        'max-len': [
            2,
            {
                code: 110,
                tabWidth: 1,
                ignoreComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'react/react-in-jsx-scope': 0,
        'no-underscore-dangle': 0,
        'no-shadow': 0,
        'quote-props': 0,
        'func-names': 0,
    },
    globals: {
        __IS_DEV__: true,
    },
};
