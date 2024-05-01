import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./.vitepress/**/*.{js,ts,vue}", "./src/pages/**/*.md"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Noto Serif", ...defaultTheme.fontFamily.serif],
      },
    },
  },
} satisfies Config;
