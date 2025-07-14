// tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  dts: true,            // generate .d.ts files
  clean: true,          // clean dist before build
  format: ['esm', 'cjs'], // emit both ESM and CJS
  target: 'es2020',
  sourcemap: true,
  splitting: false,     // usually off for libraries
  minify: false,
  outDir: 'dist',
  outExtension({ format }) {
    return {
      js: format === 'esm' ? '.mjs' : '.cjs',
    };
  },
});
