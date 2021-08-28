import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'lib/index.js',
  output: [
    {
      file: 'build/index.js',
      format: 'umd',
    },
    {
      name: 'ranging',
      file: 'build/index.min.js',
      format: 'umd',
      plugins: [terser()]
    }
  ],
  plugins: [
    typescript(),
    nodeResolve(),
    commonjs(),
  ],
};