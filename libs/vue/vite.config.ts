import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      outDir: 'dist', // Correct property to specify declaration output directory
      include: ['./src/**/*.ts', './src/**/*.vue'], // Include .ts and .vue files
    }),
  ],
  build: {
    lib: {
      entry: './src/index.ts', // Main entry file
      name: 'SwarmakitVue',
      formats: ['es', 'cjs', 'umd'], // Generate ES, CommonJS, and UMD formats
      fileName: (format) => {
        if (format === 'es') return 'index.es.js';
        if (format === 'cjs') return 'index.cjs.js';
        if (format === 'umd') return 'index.umd.js';
      },
    },
    rollupOptions: {
      external: ['vue'], // Exclude Vue from the bundle
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    outDir: 'dist', // Ensure output is in `dist`
  },
});
