import type { SiteConfig } from "vitepress";

export default {
  load() {
    const config: SiteConfig = (globalThis as any).VITEPRESS_CONFIG;

    return {
      title: config.site.title,
      author: "Dương Lê Hoài Phong",
    };
  },
};
