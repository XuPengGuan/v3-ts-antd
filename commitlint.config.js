module.exports = {
  extends: ["./node_modules/vue-cli-plugin-commitlint/lib/lint"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build", // 修改构建打包文件
        "chore", // 构建过程或辅助工具的变动
        "docs", // 文档（documentation）
        "feat", // 新功能（feature）
        "fix", // 修补bug
        "perf", // 性能优化
        "refactor", // 重构（即不是新增功能，也不是修改bug的代码变动）
        "revert", // 还原以前的提交
        "style", // 格式（不影响代码运行的变动）
        "test", // 增加测试
      ],
    ],
    "type-case": [0],
    "type-empty": [0],
    "scope-empty": [0],
    "scope-case": [0],
    "subject-full-stop": [0, "never"],
    "subject-case": [0, "never"],
    "header-max-length": [0, "always", 72],
  },
};
