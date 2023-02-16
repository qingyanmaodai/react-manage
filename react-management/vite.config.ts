import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//新增路径别名声明
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
