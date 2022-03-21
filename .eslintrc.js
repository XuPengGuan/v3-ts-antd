module.exports = {
  root: true,
  env: {
    node: true,
    "vue/setup-compiler-macros": true, // 解决script setup中 ‘defineProps‘ is not defined， 配合eslint@7.32.0和eslint-plugin-vue@8.0.0
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2022,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-var-requires": 0,
    // "@typescript-eslint/no-explicit-any": ["off"],
  },
};
