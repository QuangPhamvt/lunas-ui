import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import viteTsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./packages"),
    },
  },
  build: {
    lib: {
      entry: [resolve(__dirname, "packages/index.ts")],
      name: "EcommerceUI",
      fileName: 'index'
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
  },
  plugins: [react(), viteTsconfigPaths(), dts({ insertTypesEntry: true })],
});
