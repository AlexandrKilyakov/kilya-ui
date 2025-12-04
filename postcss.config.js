import postcssPrefixer from "postcss-prefixer";

export default {
  plugins: [
    postcssPrefixer({
      prefix: "kilya-",
      // Исключаем классы, которые уже начинаются с kilya-
      ignore: [/^kilya-/],
    }),
  ],
};
