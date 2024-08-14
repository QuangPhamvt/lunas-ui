import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: [
    "./packages/Atoms/index.ts",
    "./packages/tailwindTheme.js"
  ],
  target: 'es2021',
  format: ["esm"],
  splitting: false,
  clean: true,
  dts: true,
  external: ["react", "react-dom", "react/jsx-runtime", "clsx", "tailwind-merge"],
});