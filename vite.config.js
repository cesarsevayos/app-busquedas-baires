// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/app-busquedas-baires/", // 👈 IMPORTANTE para GH Pages
});
