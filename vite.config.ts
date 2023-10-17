import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path"; // Import the resolve function from the 'path' module
// import htmlEntryPlugin from "vite-html-entry";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about1.html"),
      },
    },
  },
  plugins: [react()],
});
