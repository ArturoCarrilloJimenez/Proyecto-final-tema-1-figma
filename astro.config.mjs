// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: "static", // Necesario para GitHub Pages
  base: "/Proyecto-final-tema-1-figma/",
  vite: {
    resolve: {
      alias: {
        "@styles": "/public/bootstrap/dist/css",
      },
    },
  },
});
