import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],              // ✅ Outputs ESM
  target: 'es2022',             // ✅ Enables top-level await
  dts: true,                    // ✅ Generates declaration files
  sourcemap: true,
  clean: true,
  outDir: 'dist',
  esbuildOptions(options) {
    options.banner = {
      js: `import.meta.url;`,   // Needed to avoid warnings
    };
    options.plugins ??= [];
    options.plugins.push({
      name: 'rewrite-extensions',
      setup(build) {
        build.onResolve({ filter: /^\.\.?\// }, args => {
          if (!args.path.endsWith('.ts') && !args.path.endsWith('.js')) {
            return {
              path: args.path + '.js',
              namespace: 'file'
            };
          }
        });
      }
    });
  }
});
