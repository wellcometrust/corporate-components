// node-resolve will resolve all the node dependencies
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import url from 'rollup-plugin-url';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
// import postcssCalc from 'postcss-calc';
import cssvariables from 'postcss-css-variables';

const extensions = [
  '.js',
  '.jsx',
  '.ts',
  '.tsx'
];

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM'
};

export default {
  input: 'src/components/index.ts',
  output: {
    file: 'dist/esm/index.js',
    format: 'esm'
  },
  // All the used libs need to be here
  external: Object.keys(globals),
  plugins: [
    resolve({
      extensions,
    }),
    babel({
      exclude: 'node_modules/**',
      extensions,
      runtimeHelpers: true
    }),
    commonjs({
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        'node_modules/lodash.throttle/index.js': ['throttle'],
        'node_modules/react-is/index.js': [
          'isElement',
          'isValidElementType',
          'ForwardRef'
        ]
      }
    }),
    url({
      // by default, rollup-plugin-url will not handle font files
      include: ['**/*.woff', '**/*.woff2'],
      // setting infinite limit will ensure that the files
      // are always bundled with the code, not copied to /dist
      limit: Infinity
    }),
    json(),
    postcss({
      extract: 'dist/styles.css',
      minimize: true,
      plugins: [autoprefixer(), cssvariables()]
    })
  ]
};
