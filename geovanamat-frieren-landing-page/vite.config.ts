import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"
import { fileURLToPath } from 'url'

// https://vite.dev/config/
export default defineConfig({
  base: '/geovanamat-frieren-landing-page/',
  plugins: [react(), 
    tailwindcss()
  ],
  resolve: {
    alias: {
      // FIX: __dirname is not available in ES modules. Using path.dirname(fileURLToPath(import.meta.url)) is the correct equivalent.
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./src"),
    },
  },
})