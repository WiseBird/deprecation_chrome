module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: [
        'plugin:deprecation/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    plugins: [
        'eslint-plugin-deprecation',
    ],
};
