// build.js
const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['server.js'],
  bundle: true,
  minify: true,
  treeShaking: true,
  outfile: 'dist/bundle.js',
  platform: 'node',
  format: 'esm', // use 'esm' for ESM support
  target: ['node18'], // match your Node version
}).catch(() => process.exit(1));
