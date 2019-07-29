import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';

const ENTRY_POINT = 'src/index.js';
const GLOBAL_NAME = 'MyLib';
const UMD_FILE = 'dist/index.umd.js';
const CJS_FILE = 'dist/index.cjs.js';
const ESM_FILE = 'dist/index.esm.js';
const EXTERNAL = ['react', 'prop-types'];

export default [
  // UMD
  {
    input: ENTRY_POINT,
    output: {
      name: GLOBAL_NAME,
      file: UMD_FILE,
      format: 'umd',
      globals: {
        react: 'React',
        'prop-types': 'PropTypes',
      },
    },
    external: EXTERNAL,
    plugins: [
      babel({
        exclude: 'node_modules/**',
        plugins: [
          [
            'babel-plugin-transform-react-remove-prop-types',
            { removeImport: true },
          ],
        ],
      }),
      resolve(),
      commonjs({
        include: /node_modules/,
      }),
      replace({
        __DEV__: 'false',
      }),
      terser(),
    ],
  },
  // CJS
  {
    input: ENTRY_POINT,
    output: {
      file: CJS_FILE,
      format: 'cjs',
    },
    external: EXTERNAL,
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      resolve(),
      commonjs({
        include: /node_modules/,
      }),
      replace({
        __DEV__: `process.env.NODE_ENV === 'development'`,
      }),
    ],
  },
  // ESM
  {
    input: ENTRY_POINT,
    output: {
      file: ESM_FILE,
      format: 'es',
    },
    external: EXTERNAL,
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      resolve(),
      commonjs({
        include: /node_modules/,
      }),
      replace({
        __DEV__: `process.env.NODE_ENV === 'development'`,
      }),
    ],
  },
];
