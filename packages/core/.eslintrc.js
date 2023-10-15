module.exports = {
    root: true,
    extends: ['custom/library', 'plugin:@typescript-eslint/recommended'],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaScript: 'latest',
        sourceType: 'module',
    },
    ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.js'],
}
