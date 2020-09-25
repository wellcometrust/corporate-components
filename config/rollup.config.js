// node-resolve will resolve all the node dependencies
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import url from 'rollup-plugin-url';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import calc from 'postcss-calc';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

const globals = {
  react: 'React',
  'react-dom': 'ReactDOM'
};

const isProduction = process.env.NODE_ENV === 'production';

export default (async () => ({
  external: Object.keys(globals),
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    resolve({
      extensions,
      customResolveOptions: {
        // Allows us to import modules absolutely from these directories
        moduleDirectory: ['./src', './src/components']
      }
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
    // Minifies JS if production
    isProduction && (await import('rollup-plugin-terser')).terser(),
    url({
      // by default, rollup-plugin-url will not handle font files
      include: ['**/*.woff', '**/*.woff2'],
      // setting infinite limit will ensure that the files
      // are always bundled with the code, not copied to /dist
      limit: Infinity
    }),
    json(),
    postcss({
      extract: 'style.css',
      minimize: isProduction,
      plugins: [autoprefixer(), calc()]
    })
  ]
}))();
