import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    prerender: { routes: ["/"], crawlLinks: true },
  },
});
