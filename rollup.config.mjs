import json from '@rollup/plugin-json'
import del from 'rollup-plugin-delete'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import nodeExternals from 'rollup-plugin-node-externals'

export default {
	input: 'src/index.mjs',
	output: [
    { format: 'es', file: 'dist/index.mjs' },
    { format: 'cjs', file: 'dist/index.cjs' }
  ],
  plugins: [
    json(),
    nodeExternals({ deps: false }), // Must always be before `nodeResolve()`.
    nodeResolve({
      exportConditions: ['node', 'import', 'require', 'default']
    }),
    babel({ babelHelpers: 'bundled' }),
    commonjs(),
    del({ targets: 'dist/*', runOnce: true }),
  ]
};