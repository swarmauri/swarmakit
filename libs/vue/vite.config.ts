import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: './src/index.ts', // Use the newly created `src/index.ts`
      name: 'SwarmakitVue',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // Exclude Vue from the bundle
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
