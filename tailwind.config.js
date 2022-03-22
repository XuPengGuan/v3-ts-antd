function Pixels(number = 1001) {
  return { ...Array.from(Array(number), (v, index) => `${index}px`) };
}

// 使用tailwindcss时需要@vue/cli-service版本在5.0.0以上
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{vue,less,css}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        ...Pixels(),
      },
      backgroundSize: {
        full: "100% 100%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
