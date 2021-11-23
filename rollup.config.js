import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'leb-ref/index.ts',
  output: [
    {
      name: 'ranging',
      file: 'build/unmin/index.js',
      format: 'umd',
      plugins: [],
    },
    {
      file: 'build/unmin/index.mjs',
      format: 'es',
    },
    {
      name: 'ranging',
      file: 'build/index.js',
      format: 'umd',
      plugins: [terser()],
    },
    {
      file: 'build/index.mjs',
      format: 'es',
      plugins: [terser()],
    },
  ],
  plugins: [
    typescript({ tsconfig: './tsconfig.json', module: 'esnext' }),
    nodeResolve(),
    commonjs(),
  ],
};
