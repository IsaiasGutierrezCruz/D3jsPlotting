import { defineConfig } from "vite";

export default defineConfig({
  root: "./",
  base: "/src/",
  publicDir: "public",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  plugins: [],
});
