import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import json from 'rollup-plugin-json'

const pkg = require('./package.json')

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.module, format: 'es', sourcemap: true },
  ],
  external: [
    '@lightningjs/core',
  ],
  plugins: [
    json(),
    commonjs(),
    resolve(),
    sourceMaps(),
  ],
}
