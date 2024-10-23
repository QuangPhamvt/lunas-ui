module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:import/react',
    'plugin:@typescript-eslint/recommended',
    'plugin:ssr-friendly/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:storybook/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-hook-form/recommended',
    'plugin:react-form-fields/recommended',
    'plugin:react-perf/recommended',
    'plugin:react-prefer-function-component/recommended',
  ],
  plugins: [
    'import',
    '@shopify',
    'react-refresh',
    'storybook',
    'validate-jsx-nesting',
    'sonar',
    'unicorn',
    'react-perf',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'packages/**/*.stories.tsx'],
  parser: '@typescript-eslint/parser',
  rules: {
    // ESLint rules
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-console': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': 'error',
    'no-continue': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-dupe-args': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-fallthrough': 'error',
    'no-func-assign': 'error',
    'no-implied-eval': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-multi-str': 'error',
    'no-global-assign': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-object-constructor': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-plusplus': 'error',
    'no-proto': 'error',
    'no-regex-spaces': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-unreachable': 'error',
    'no-use-before-define': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-void': 'error',
    'no-var': 'error',
    'no-warning-comments': 'error',
    'no-with': 'error',
    'block-scoped-var': 'error',
    camelcase: 'error',
    'consistent-this': 'error',
    'constructor-super': 'error',
    'default-case': 'error',
    'dot-notation': 'error',
    eqeqeq: 'error',
    'guard-for-in': 'error',
    'max-depth': 'error',
    'max-nested-callbacks': 'error',
    'max-params': ['error', 4],
    'new-cap': 'error',
    'object-shorthand': 'error',
    'operator-assignment': 'error',
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    radix: 'error',
    'require-yield': 'error',
    yoda: 'error',
    'no-empty-function': 'error',
    'no-new-native-nonconstructor': 'error',
    'no-unmodified-loop-condition': 'error',
    'prefer-rest-params': 'error',
    'no-extra-label': 'error',
    'no-unused-labels': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-duplicate-imports': 'error',
    'no-unsafe-finally': 'error',
    'no-useless-computed-key': ['error', { enforceForClassMembers: true }],
    'no-useless-rename': 'error',
    'no-template-curly-in-string': 'error',
    'symbol-description': 'error',
    'prefer-numeric-literals': 'error',
    'no-useless-return': 'error',
    'require-await': 'error',
    'no-await-in-loop': 'error',
    'no-multi-assign': 'error',
    'prefer-promise-reject-errors': 'error',
    'no-compare-neg-zero': 'error',
    'for-direction': 'error',
    'no-buffer-constructor': 'error',
    'getter-return': 'error',
    strict: 'error',
    'max-classes-per-file': 'error',
    'no-misleading-character-class': 'error',
    'require-atomic-updates': 'error',
    'no-async-promise-executor': 'error',
    'no-useless-catch': 'error',
    'prefer-named-capture-group': 'error',
    'no-redeclare': 'error',
    'no-prototype-builtins': 'error',
    'no-import-assign': 'error',
    'default-param-last': 'error',
    'no-constructor-return': 'error',
    'no-dupe-else-if': 'error',
    'no-setter-return': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-object-spread': 'error',
    'accessor-pairs': 'error',
    'default-case-last': 'error',
    'no-useless-backreference': 'error',
    'no-loss-of-precision': 'error',
    'no-promise-executor-return': 'error',
    'no-unreachable-loop': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'init-declarations': 'error',
    'consistent-return': 'error',
    'no-unused-private-class-members': 'error',
    'no-constant-binary-expression': 'error',
    'no-empty-static-block': 'error',

    complexity: ['error', { max: 10 }],
    'func-names': ['error', 'as-needed'],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'one-var': ['error', 'never'],
    'no-else-return': ['error', { allowElseIf: false }],
    'no-cond-assign': ['error', 'always'],
    'no-irregular-whitespace': ['error', { skipStrings: false }],
    'valid-typeof': ['error', { requireStringLiterals: true }],
    'no-return-assign': ['error', 'always'],
    'no-self-assign': ['error', { props: true }],
    'no-undef': ['error', { typeof: true }],
    'no-underscore-dangle': [
      'error',
      {
        enforceInMethodNames: true,
        enforceInClassFields: true,
        allowFunctionParams: false,
        allowInArrayDestructuring: false,
        allowInObjectDestructuring: false,
      },
    ],
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'func-name-matching': ['error', { considerPropertyDescriptor: true }],
    'use-isnan': ['error', { enforceForSwitchCase: true, enforceForIndexOf: true }],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'accumulator',
          'ctx',
          'context',
          'req',
          'request',
          'res',
          'response',
          '$scope',
          'staticContext',
        ],
      },
    ],
    'no-unsafe-negation': ['error', { enforceForOrderingRelations: true }],
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'no-implicit-globals': ['error', { lexicalBindings: true }],
    'array-callback-return': ['error', { allowImplicit: false, checkForEach: true }],
    'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }],
    'multiline-comment-style': ['error', 'separate-lines'],
    'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],
    'no-unused-expressions': ['error', { enforceForJSX: true }],
    'no-sequences': ['error', { allowInParentheses: false }],
    'no-implicit-coercion': ['error', { disallowTemplateShorthand: true }],
    'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
    'logical-assignment-operators': ['error', 'always', { enforceForIfStatements: true }],

    'no-restricted-globals': [
      'error',
      'addEventListener',
      'blur',
      'close',
      'closed',
      'confirm',
      'defaultStatus',
      'defaultstatus',
      'event',
      'external',
      'find',
      'focus',
      'frameElement',
      'frames',
      'history',
      'innerHeight',
      'innerWidth',
      'length',
      'location',
      'locationbar',
      'menubar',
      'moveBy',
      'moveTo',
      'name',
      'onblur',
      'onerror',
      'onfocus',
      'onload',
      'onresize',
      'onunload',
      'open',
      'opener',
      'opera',
      'outerHeight',
      'outerWidth',
      'pageXOffset',
      'pageYOffset',
      'parent',
      'print',
      'removeEventListener',
      'resizeBy',
      'resizeTo',
      'screen',
      'screenLeft',
      'screenTop',
      'screenX',
      'screenY',
      'scroll',
      'scrollbars',
      'scrollBy',
      'scrollTo',
      'scrollX',
      'scrollY',
      'status',
      'statusbar',
      'stop',
      'toolbar',
      'top',
    ],

    //https://github.com/import-js/eslint-plugin-import/tree/main/docs/rules
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-absolute-path': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'error',
    'import/no-mutable-exports': 'error',
    'import/unambiguous': 'error',
    'import/no-amd': 'error',
    'import/first': 'error',
    'import/no-named-default': 'error',
    'import/no-commonjs': 'error',
    'import/no-relative-packages': 'error',
    'import/no-import-module-exports': 'error',
    'import/no-empty-named-blocks': 'error',
    'import/no-cycle': ['error', { commonjs: true }],
    'import/no-useless-path-segments': ['error', { commonjs: true }],
    'import/no-unused-modules': ['error', { missingExports: false, unusedExports: true }],
    'import/no-dynamic-require': ['error', { esmodule: true }],
    'import/no-anonymous-default-export': ['error', { allowCallExpression: false }],
    'import/newline-after-import': ['error', { considerComments: true }],
    'import/no-duplicates': ['error', { considerQueryString: true, 'prefer-inline': true }],

    'unicorn/custom-error-definition': 'error',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unused-properties': 'error',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-dom-node-append': 'error',
    'unicorn/prefer-dom-node-remove': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-dom-node-text-content': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/better-regex': 'error',
    'unicorn/throw-new-error': 'error',
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-string-replace-all': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/no-null': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/no-object-as-default-parameter': 'error',
    'unicorn/explicit-length-check': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-ternary': 'error',
    'unicorn/numeric-separators-style': 'error',
    'unicorn/catch-error-name': 'error',
    'unicorn/no-lonely-if': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-default-parameters': 'error',
    'unicorn/no-new-array': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-regexp-test': 'error',
    'unicorn/consistent-destructuring': 'error',
    'unicorn/no-array-push-push': 'error',
    'unicorn/no-this-assignment': 'error',
    'unicorn/no-static-only-class': 'error',
    'unicorn/prefer-array-flat': 'error',
    'unicorn/prefer-switch': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-module': 'error',
    'unicorn/no-document-cookie': 'error',
    'unicorn/require-array-join-separator': 'error',
    'unicorn/require-number-to-fixed-digits-argument': 'error',
    'unicorn/no-array-method-this-argument': 'error',
    'unicorn/prefer-prototype-methods': 'error',
    'unicorn/no-useless-length-check': 'error',
    'unicorn/no-useless-spread': 'error',
    'unicorn/no-useless-fallback-in-spread': 'error',
    'unicorn/no-invalid-remove-event-listener': 'error',
    'unicorn/no-empty-file': 'error',
    'unicorn/prefer-code-point': 'error',
    'unicorn/no-await-expression-member': 'error',
    'unicorn/no-thenable': 'error',
    'unicorn/no-useless-promise-resolve-reject': 'error',
    'unicorn/relative-url-style': 'error',
    'unicorn/text-encoding-identifier-case': 'error',
    'unicorn/no-useless-switch-case': 'error',
    'unicorn/prefer-modern-math-apis': 'error',
    'unicorn/no-unreadable-iife': 'error',
    'unicorn/prefer-native-coercion-functions': 'error',
    'unicorn/prefer-top-level-await': 'error',
    'unicorn/prefer-logical-operator-over-ternary': 'error',
    'unicorn/prefer-event-target': 'error',
    'unicorn/no-unnecessary-await': 'error',
    'unicorn/switch-case-braces': 'error',
    'unicorn/no-typeof-undefined': 'error',
    'unicorn/prefer-set-size': 'error',
    'unicorn/no-negated-condition': 'error',
    'unicorn/prefer-at': 'error',
    'unicorn/prefer-blob-reading-methods': 'error',
    'unicorn/no-unnecessary-polyfills': 'error',
    'unicorn/no-single-promise-in-promise-methods': 'error',
    'unicorn/no-await-in-promise-methods': 'error',
    'unicorn/no-anonymous-default-export': 'error',
    'unicorn/consistent-empty-array-spread': 'error',
    'unicorn/prefer-string-raw': 'error',
    'unicorn/no-invalid-fetch-options': 'error',
    'unicorn/no-magic-array-flat-depth': 'error',
    'unicorn/prefer-structured-clone': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/no-negation-in-equality-check': 'error',

    'unicorn/filename-case': [
      'error',
      { cases: { kebabCase: true, camelCase: true, pascalCase: true } },
    ],
    'unicorn/import-index': ['error', { ignoreImports: true }],
    'unicorn/prefer-object-from-entries': [
      'error',
      {
        functions: ['fromPairs', 'R.fromPairs'],
      },
    ],
    'unicorn/prefer-export-from': ['error', { ignoreUsedVariables: true }],

    'react-perf/jsx-no-new-object-as-prop': 'off',

    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-depth.md
    'react/jsx-max-depth': ['error', { max: 5 }],
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    'react/no-string-refs': ['error', { noTemplateLiterals: true }],
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
    'react/state-in-constructor': ['error', 'never'],
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    'react/forbid-prop-types': ['error', { checkContextTypes: true, checkChildContextTypes: true }],
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
    'react/no-unsafe': ['error', { checkAliases: true }],
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
    'react/jsx-no-target-blank': ['error', { forms: true, warnOnSpreadAttributes: true }],
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
    'react/jsx-curly-brace-presence': ['error', { propElementValues: 'always' }],
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': ['error', 'always', { destructureInSignature: 'always' }],
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-leaked-render.md
    'react/jsx-no-leaked-render': ['error', { validStrategies: ['coerce'] }],
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
    'react/display-name': ['error', { checkContextObjects: true }],
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': ['error', { requireDataLowercase: true }],
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-script-url.md
    'react/jsx-no-script-url': ['error', { includeFromSettings: true }],
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    'react/jsx-indent': ['error', 2],
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    'react/jsx-indent-props': ['error', 2],
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
    'react/jsx-max-props-per-line': ['error', { maximum: 2, when: 'multiline' }],
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types .md
    'react/prop-types': 'off',
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['arrow-function'],
      },
    ],
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
        warnOnDuplicates: true,
      },
    ],
    //https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/boolean-prop-naming.md
    'react/boolean-prop-naming': [
      'error',
      {
        rule: '^(is|has|are|can|should|did|will)[A-Z]([A-Za-z0-9])+',
        validateNested: true,
      },
    ],

    //https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/README.md
    'react-hooks/exhaustive-deps': 'warn',

    //https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/lang.md
    'jsx-a11y/lang': 'error',
    //https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/prefer-tag-over-role.md
    'jsx-a11y/prefer-tag-over-role': 'error',
    //https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/no-aria-hidden-on-focusable.md
    'jsx-a11y/no-aria-hidden-on-focusable': 'error',
    //https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/alt-text.md
    'jsx-a11y/alt-text': ['error', { img: ['Image', 'Img'] }],
    //https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/mouse-events-have-key-events.md
    'jsx-a11y/mouse-events-have-key-events': [
      'error',
      {
        hoverInHandlers: ['onMouseOver', 'onMouseEnter', 'onPointerOver', 'onPointerEnter'],
        hoverOutHandlers: ['onMouseOut', 'onMouseLeave', 'onPointerOut', 'onPointerLeave'],
      },
    ],

    //https://github.com/sebastian-software/eslint-plugin-shopify-lean/blob/master/docs/rules/jsx-prefer-fragment-wrappers.md
    '@shopify/jsx-prefer-fragment-wrappers': 'error',
    //https://github.com/sebastian-software/eslint-plugin-shopify-lean/blob/master/docs/rules/react-hooks-strict-return.md
    '@shopify/react-hooks-strict-return': 'error',

    //https://github.com/MananTank/eslint-plugin-validate-jsx-nesting
    'validate-jsx-nesting/no-invalid-jsx-nesting': 'error',

    //https://sonarsource.github.io/rspec/#/rspec/S6442/javascript
    'sonar/no-hook-setter-in-body': 'error',
    //https://sonarsource.github.io/rspec/#/rspec/S6443/javascript
    'sonar/no-useless-react-setstate': 'error',

    'react/jsx-no-literals': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-sort-props': 'off',
    'react/sort-prop-types': 'off',
    'react/sort-default-props': 'off',
    'react/checked-requires-onchange-or-readonly': 'off',

    'react/require-optimization': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/no-object-type-as-default-prop': 'off',

    //jsx-a11y
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'jsx-a11y': {
      polymorphicPropName: 'as',
      components: {
        Image: 'img',
        Img: 'img',
      },
    },
  },
  env: {
    browser: true,
  },
}
