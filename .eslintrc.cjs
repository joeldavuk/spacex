module.exports = {
    env: {browser: true, es2020: true},
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react-hooks/recommended',
        'plugin:eslint-comments/recommended',
        'plugin:testing-library/react',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:unicorn/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {ecmaVersion: 'latest', sourceType: 'module', project: './tsconfig.json'},
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': 'warn',
        "prefer-regex-literals": 0,
        "import/prefer-default-export": "off",
        "jest/no-disabled-tests": 0,
        "jest/no-identical-title": 0,
        "func-names": 0,
        "getter-return": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/label-has-for": 0,
        "jsx-a11y/mouse-events-have-key-events": 0,
        "lines-between-class-members": 0,
        "no-buffer-constructor": 0,
        "no-console": [
            "error",
            {
                allow: ["warn", "error", "log"],
            },
        ],
        "no-else-return": 0,
        "padding-line-between-statements": 0,
        "prefer-destructuring": 0,
        "react/button-has-type": 0,
        "react/default-props-match-prop-types": 1,
        "react/destructuring-assignment": 0,
        "react/forbid-prop-types": 0,
        "react/jsx-curly-brace-presence": 1,
        "react/jsx-one-expression-per-line": 0,
        "react/no-access-state-in-setstate": 1,
        "react/no-danger": 1,
        "react/no-this-in-sfc": 1,
        "react/no-unused-prop-types": 2,
        "react/no-unused-state": 0,
        "spaced-comment": 0,
        camelcase: 0,

        /* End */
        "implicit-arrow-linebreak": 0,
        "function-paren-newline": 0,
        "react/jsx-filename-extension": 0,
        "react/no-array-index-key": 0,
        "import/no-extraneous-dependencies": 0,
        "import/no-unresolved": 0,
        "import/extensions": 0,
        "global-require": 0,
        "no-underscore-dangle": 0,
        "arrow-body-style": 0,
        "react/require-default-props": 0,
        "react/sort-comp": [
            1,
            {
                order: [
                    "type-annotations",
                    "static-methods",
                    "lifecycle",
                    "everything-else",
                    "render",
                ],
            },
        ],
        "prettier/prettier": [
            "off",
            {
                singleQuote: true,
                trailingComma: "es5",
            },
        ],
        "jsx-a11y/media-has-caption": 0,
        "template-curly-spacing": ["error", "never"],
        'eslint-comments/no-unused-disable': 'error',
        'import/no-named-as-default': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        // Using await inside expect with React Testing Library's find* queries gives you better errors.
        'jest/prefer-expect-resolves': 'off',
        // Allows using only custom assertions within a test
        'jest/expect-expect': ['warn', { assertFunctionNames: ['expect', 'snapshotDataLayer'] }],

        // We clean up tests automatically.
        'testing-library/no-manual-cleanup': 'error',
        'testing-library/prefer-user-event': 'error',

        'unicorn/numeric-separators-style': 'off',
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        'react/jsx-no-constructed-context-values': 'error',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-unsafe-assignment': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
        '@typescript-eslint/array-type': 'error',
        'import/no-commonjs': 'warn',
        'unicorn/import-style': 'warn',
        'unicorn/no-array-for-each': 'warn',
        'unicorn/filename-case': 'off',
        'unicorn/prevent-abbreviations': 'off',
        'jest/no-mocks-import': 'warn',
        '@typescript-eslint/no-unsafe-return': 'error',
        'import/no-default-export': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
        'eslint-comments/require-description': 'error',
        'react/display-name': 'warn',
        'unicorn/consistent-destructuring': 'warn',
        'array-callback-return': ['error', { allowImplicit: true }],
        'unicorn/consistent-function-scoping': 'warn',
        'jest/no-if': 'warn',
        'jest/unbound-method': 'warn',
        'jest/no-conditional-expect': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'unicorn/prefer-query-selector': 'warn',
        'jest/no-focused-tests': 'error',
        'no-promise-executor-return': 'error',
        'jest/valid-expect': 'warn',
        'unicorn/prefer-spread': 'warn',
        'react/jsx-key': 'error',
        '@typescript-eslint/ban-types': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/no-use-before-define': 'error',
        'unicorn/prefer-object-from-entries': 'warn',
        'no-lonely-if': 'warn',
        'react/no-deprecated': 'error',
        'unicorn/prefer-array-some': 'warn',
        'no-await-in-loop': 'error',
        'unicorn/prefer-number-properties': 'warn',
        'eslint-comments/disable-enable-pair': 'error',
        'unicorn/explicit-length-check': 'warn',
        '@typescript-eslint/no-implied-eval': 'error',
        'unicorn/no-array-callback-reference': 'warn',
        'no-useless-catch': 'warn',
        'prefer-const': 'warn',
        'unicorn/no-object-as-default-parameter': 'warn',
        'unicorn/no-this-assignment': 'warn',
        '@typescript-eslint/no-this-alias': 'warn',
        'unicorn/no-await-expression-member': 'warn',
        'no-useless-escape': 'warn',
        'unicorn/no-document-cookie': 'warn',
        'unicorn/no-array-push-push': 'warn',
        'no-empty': 'warn',
        '@typescript-eslint/unbound-method': 'warn',
        'unicorn/no-new-array': 'error',
        'no-fallthrough': 'warn',
        'no-constructor-return': 'error',
        'unicorn/prefer-ternary': 'warn',
        'no-prototype-builtins': 'warn',
        'unicorn/no-useless-spread': 'warn',
        'unicorn/better-regex': 'warn',
        'jest/prefer-spy-on': 'warn',
        'unicorn/no-useless-undefined': 'warn',
        'unicorn/catch-error-name': 'warn',
        'jest/no-test-prefixes': 'warn',
        'unicorn/no-for-loop': 'warn',
        'unicorn/prefer-export-from': 'warn',
        'unicorn/escape-case': 'warn',
        'unicorn/prefer-string-slice': 'warn',
        'unicorn/prefer-optional-catch-binding': 'warn',
        'unicorn/no-useless-fallback-in-spread': 'warn',
        'unicorn/prefer-set-has': 'warn',
        'unicorn/new-for-builtins': 'warn',
        'unicorn/throw-new-error': 'warn',
        'unicorn/prefer-regexp-test': 'warn',
        'unicorn/no-lonely-if': 'warn',
        'unicorn/no-useless-length-check': 'warn',
        'unicorn/no-console-spaces': 'warn',
        'unicorn/prefer-switch': 'warn',
        'unicorn/prefer-includes': 'warn',
        'unicorn/prefer-dom-node-append': 'warn',
        'unicorn/prefer-add-event-listener': 'warn',
        'unicorn/prefer-array-flat-map': 'warn',
        'unicorn/no-static-only-class': 'warn',
        'unicorn/prefer-date-now': 'warn',
        'unicorn/no-zero-fractions': 'warn',
        'unicorn/prefer-array-flat': 'warn',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-shadow': 'error',
        'no-nested-ternary': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/no-throw-literal': 'warn',
        'sort-imports': 'off',
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                pathGroups: [
                    // Include 'node:' protocol imports as part of builtin.
                    {
                        pattern: 'node:**',
                        group: 'builtin',
                    },
                    {
                        pattern: 'node:**/**',
                        group: 'builtin',
                    },
                ],
                pathGroupsExcludedImportTypes: [],
            },
        ],
        /**
         * eslint-plugin-react
         */

        // Sometimes this comes on unnecessarily for forwardRef components.
        'react/prop-types': 'off',

        // These prevent some React bugs and performance issues.
        'react/no-unstable-nested-components': 'error',

        // Correct use of fragments.
        'react/jsx-no-useless-fragment': 'error',

        // Consistent React code style.
        'react/function-component-definition': [
            'warn',
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'react/jsx-boolean-value': 'warn',
        'react/jsx-fragments': ['warn', 'syntax'],
        'react/jsx-handler-names': 'warn',
    },
    overrides: [
        {
            files: "",
            rules: {
                "node/no-unpublished-require": "off",
            },
        },
        {
            // TypeScript
            files: "**/*.{ts,tsx}",
            rules: {
                "no-undef": "off",

                // TypeScript provides these checks as part of standard type checking. Turning these off
                // improves performance.
                // https://typescript-eslint.io/docs/linting/troubleshooting#eslint-plugin-import
                "import/named": "off",
                "import/namespace": "off",
                "import/default": "off",
                "import/no-named-as-default-member": "off",
            },
        },
        {
            // TypeScript declaration files
            files: "**/*.d.ts",
            rules: {
                // Using var in declaration files is perfectly fine and actually required when you want
                // those declarations to show up on globalThis.
                // https://stackoverflow.com/a/68328575
                "no-var": "off",
            },
        },
        {
            // JavaScript
            files: "**/*.{js,cjs,mjs}",
            rules: {
                // Can cause false positives in JS files.
                // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md#configuring-in-a-mixed-jsts-codebase
                "@typescript-eslint/explicit-module-boundary-types": "off",
                "@typescript-eslint/no-unsafe-assignment": "off",
                "@typescript-eslint/no-unsafe-member-access": "off",
            },
        },
        {
            // JavaScript (.cjs)
            files: "**/*.cjs",
            rules: {
                // Assuming .cjs files are not being transformed, these allow CommonJS syntax.
                "@typescript-eslint/no-var-requires": "off",
                "import/no-commonjs": "off",

                // And these disallow ESM syntax.
                "node/no-unsupported-features/es-syntax": "error",
            },
        },
        {
            // Test files
            files: "**/*.@(test|spec).{js,jsx,ts,tsx}",
            rules: {
                // Adds support for understanding when it's ok to pass unbound methods to expect calls.
                // https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/unbound-method.md#how-to-use
                "@typescript-eslint/unbound-method": "off",
                "jest/unbound-method": "error",
            },
        },
        {
            // Test files
            files: "**/@(jest.config|vite.config|webpack.config).{js,jsx,ts,tsx}",
            rules: {
                // These config files require default exports.
                "import/no-default-export": "off",
            },
        },
    ],
}
