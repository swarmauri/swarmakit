import dts from 'rollup-plugin-dts';

export default {
  input: 'dist/index.d.ts', // Use the TypeScript-generated declarations as input
  output: {
    file: 'dist/index.d.ts', // Final declaration file
    format: 'es',
  },
  plugins: [dts()],
};
