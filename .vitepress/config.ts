import { defineConfig } from "vitepress";
import { LAYOUT } from "./theme/index.i";

export default defineConfig({
  title: "Sóng to mặc sóng, đường xa kệ đường",
  description: "Sóng có to, đường có xa thì cũng mặc kệ hết",
  srcDir: "src",
  head: [
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
  transformPageData(pageData, ctx) {
    const layout = pageData.frontmatter.layout;

    if (layout !== LAYOUT.HOME && layout !== LAYOUT.TOC) {
      pageData.title = pageData.params?.title;
    }
  },
});
