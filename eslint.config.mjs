import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
    {files: ["**/*.{jsx,js,ts,tsx}"]},
    {languageOptions: { globals: globals.browser }},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        rules: {
            'react/jsx-indent': [2, 4],
            'react/jsx-indent-props': [2, 4],
            indent: [2, 4],
            'react/jsx-filename-extension': [
                2,
                { extensions: ['.js', '.jsx', '.tsx', 'ts'] },
            ],
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            'no-unused-vars': 'off',
            'react/require-default-props': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-props-no-spreading': 'warn',
            'react/function-component-definition': 'off',
            'no-shadow': 'off',
            'import/extensions': 'off',
            'import/no-extraneous-dependencies': 'off',
            'no-underscore-dangle': 'off',
            'max-len': ['error', { ignoreComments: true, code: 125 }],
            'jsx-a11y/no-static-element-interactions': 'off',
            'jsx-a11y/click-events-have-key-events': 'off',
            // 'react-hooks/rules-of-hooks': 'error',
            // 'react-hooks/exhaustive-deps': 'error',
            'no-param-reassign': 'off',
            'no-undef': 'off',
            'react/no-array-index-key': 'off',
            'arrow-body-style': 'off',
            'react/display-name': 'off',
            't@typescript-eslint/ban-ts-comment': 'off'
        },
    }
];