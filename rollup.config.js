import babel from 'rollup-plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'

export default {
    input: 'src/index.jsx',
    output: {
        file: 'dist/index.js',
        format: 'cjs', // CommonJS format for NPM
        exports: 'named',
    },
    plugins: [
        nodeResolve(),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/preset-react'],
        }),
        postcss({
            modules: false,
            extract: true,
        }),
    ],
}
