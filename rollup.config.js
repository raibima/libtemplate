import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';

export default [
  // UMD DEV
  {
    input: 'src/index.js',
    output: {
      name: 'MyLib',
      file: 'dist/index.umd.development.js',
      format: 'umd',
      globals: {
        react: 'React',
      },
    },
    external: ['react'],
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      resolve(),
      commonjs({
        include: /node_modules/,
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
    ],
  },
  // UMD PROD
  {
    input: 'src/index.js',
    output: {
      name: 'MyLib',
      file: 'dist/index.umd.production.min.js',
      format: 'umd',
      globals: {
        react: 'React',
      },
    },
    external: ['react'],
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      resolve(),
      commonjs({
        include: /node_modules/,
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      terser(),
    ],
  },
  // CJS DEV
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.development.js',
      format: 'cjs',
    },
    external: ['react'],
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      resolve(),
      commonjs({
        include: /node_modules/,
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
    ],
  },
  // CJS PROD
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.production.min.js',
      format: 'cjs',
    },
    external: ['react'],
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      resolve(),
      commonjs({
        include: /node_modules/,
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      terser(),
    ],
  },
];
