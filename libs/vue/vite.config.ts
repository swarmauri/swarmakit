import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      outDir: './dist', // Ensure this is a valid relative path
      include: ['./src'], // Include files within the `src` directory
    }),
  ],
  build: {
    lib: {
      entry: './src/index.ts', // Main entry file
      name: 'SwarmakitVue',
      formats: ['es', 'cjs', 'umd'], // Generate ES, CommonJS, and UMD formats
      fileName: (format) => `index.${format}.js`, // Simplified filename logic
    },
    rollupOptions: {
      external: ['vue'], // Exclude Vue from the bundle
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
    outDir: './dist', // Ensure output is in `dist`
  },
});
