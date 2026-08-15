// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages is a static host: there is no server runtime, so the site is
// fully prerendered to HTML. The Nitro deploy plugin (used by Lovable hosting)
// renames the server bundle, which breaks TanStack's prerender preview server
// ("Cannot find module dist/server/server.js"), so it is disabled for the
// Pages build only. Lovable/Cloudflare builds keep their default behaviour.
const isGithubPages = process.env["GITHUB_ACTIONS"] === "true";

export default defineConfig({
  ...(isGithubPages
    ? {
        nitro: false as const,
        tanstackStart: {
          prerender: {
            enabled: true,
            autoSubfolderIndex: true,
            autoStaticPathsDiscovery: true,
            crawlLinks: true,
            failOnError: true,
          },
        },
      }
    : {}),
});
