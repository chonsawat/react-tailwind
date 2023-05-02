import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import macrosPlugin from "vite-plugin-babel-macros";
import envCompatible from "vite-plugin-env-compatible";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), macrosPlugin(), envCompatible.default(), WindiCSS()],
});
