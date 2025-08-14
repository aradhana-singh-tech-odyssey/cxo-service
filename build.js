import esbuild from 'esbuild';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

await esbuild.build({
  entryPoints: ['server.js'],
  bundle: true,
  minify: true,
  treeShaking: true,
  outfile: 'dist/bundle.js',
  platform: 'node',
  format: 'esm',
  target: ['node20'],
  banner: {
    js: [
      'import { createRequire } from "module";',
      'import { fileURLToPath } from "url";',
      'import { dirname } from "path";',
      'const require = createRequire(import.meta.url);',
      'const __filename = fileURLToPath(import.meta.url);',
      'const __dirname = dirname(__filename);',
    ].join('\n'),
  },
  // Explicitly mark Node.js built-ins as external
  external: [
    'fs', 'path', 'http', 'https', 'crypto', 'stream', 'util', 'os', 'net', 
    'tls', 'dns', 'zlib', 'events', 'buffer', 'url', 'querystring', 'child_process',
    'module', 'assert', 'constants', 'https', 'http2', 'timers', 'tty', 'vm',
    'worker_threads', 'readline', 'perf_hooks', 'async_hooks', 'string_decoder'
  ]
}).catch(() => process.exit(1));
