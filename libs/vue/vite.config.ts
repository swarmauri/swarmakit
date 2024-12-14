import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      outputDir: 'dist', // Ensure declaration files are written to `dist`
      include: ['./src/**/*.ts', './src/**/*.vue'], // Include .ts and .vue files
    }),
  ],
  build: {
    lib: {
      entry: './src/index.ts', // Main entry file
      name: 'SwarmakitVue',
      fileName: (format) => `index.${format}.js`,
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
