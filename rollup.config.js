import fs from 'fs';

// node-resolve will resolve all the node dependencies
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import url from 'rollup-plugin-url';
import sass from 'rollup-plugin-sass';

const globals = {
  'react': 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'styled',
};

export default {
  input: 'src/components/index.js',
  output: {
    file: 'dist/esm/index.js',
    format: 'esm'
  },
  // All the used libs need to be here
  external: Object.keys(globals),
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true
    }),
    commonjs({
      namedExports: {
        // left-hand side can be an absolute path, a path
        // relative to the current directory, or the name
        // of a module in node_modules
        'node_modules/lodash.throttle/index.js': [ 'throttle' ],
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
      limit: Infinity,
    }),
    json(),
    sass({
      insert: false,

      // Default behaviour disable output
      // output: false,

      // Write all styles to the bundle destination where .js is replaced by .css
      // output: true,

      // Filename to write all styles
      output: 'dist/styles.css',

      // Callback that will be called ongenerate with two arguments:
      // - styles: the concatenated styles in order of imported
      // - styleNodes: an array of style objects:
      //  [
      //    { id: './style1.scss', content: 'body { color: red };' },
      //    { id: './style2.scss', content: 'body { color: green };' }
      //  ]
      // output(styles, styleNodes) {
      //   fs.writeFileSync('dist/styles.css', styles);
      // }

      options: {
        outputStyle: 'compressed'
      },
    }),

  ]
}
