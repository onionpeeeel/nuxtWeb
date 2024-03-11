// .eslintrc.js
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:nuxt/recommended",
        "plugin:vue/vue3-recommended"
    ],
    parserOptions: {
        ecmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        sourceType: "module",
    },
    rules: {
        // pages 파일 생성 시 multi-word 에러 방지
        'vue/multi-word-component-names': 0,
    }
}