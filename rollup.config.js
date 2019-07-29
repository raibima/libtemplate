import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import pkg from './package.json';

const NODE_ENV = process.env.NODE_ENV || 'development';
const __DEV__ = NODE_ENV === 'development';

export default [
  {
    input: 'src/index.js',
    output: [
      {
        name: 'MyLib',
        file: pkg['umd:main'],
        format: 'umd',
        globals: {
          react: 'React',
        },
      },
      {
        file: __DEV__
          ? 'dist/index.development.js'
          : 'dist/index.production.min.js',
        format: 'cjs',
      },
      {
        file: pkg['module'],
        format: 'es',
      },
    ],
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
        'process.env.NODE_ENV': JSON.stringify(
          process.env.NODE_ENV || 'development'
        ),
      }),
    ],
  },
];
