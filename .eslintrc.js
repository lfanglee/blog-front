module.exports = {
    'root': true,
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true
    },
    'extends': ['standard', 'eslint:recommended', 'plugin:vue/recommended'],
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'parser': 'typescript-eslint-parser',
        'ecmaFeatures': {
            'legacyDecorators': true
        }
    },
    'plugins': ['html', 'vue', 'typescript'],
    'rules': {
        'indent': ['error', 4],
        'quotes': ['warn', 'single'],
        'semi': ['warn', 'always'],
        'space-before-blocks': ['warn'],
        'spaced-comment': ['warn'],
        'comma-dangle': ['error', 'only-multiline'],

        'no-var': ['error'],
        'no-new-object': ['error'],
        'no-array-constructor': ['error'],
        'no-new-func': ['error'],
        'no-unused-vars': ['warn', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],

        'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
        'vue/html-indent': ['error', 4],
        'vue/max-attributes-per-line': 'off',
        'vue/html-self-closing': 'off'
    }
};