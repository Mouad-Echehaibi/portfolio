import path from "path"  
import { defineConfig } from "vite";  
import react from "@vitejs/plugin-react";  
import tailwindcss from "@tailwindcss/vite";  
  
// https://vite.dev/config/  
export default defineConfig({  
  plugins: [tailwindcss(), react()],  
  resolve: {  
    alias: {  
      "@": path.resolve(__dirname, "./src"),  
    },  
  },  
  base: "/",  
  server: {  
    proxy: {  
      '/api': 'http://localhost:8000', // <-- هذه هي الإضافة  
    },  
  },  
});