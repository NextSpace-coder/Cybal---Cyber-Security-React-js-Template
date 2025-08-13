// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTagger from "vite-tagger";

export default defineConfig({
  plugins: [
    react(),
    viteTagger({ prefixName: "wb" }),
  ],
  build: {
    outDir: 'dist',
  },
  server: {
    host: "::",
    port: 8080,
    open: true,
  },
});

