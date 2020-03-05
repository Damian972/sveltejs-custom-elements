import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		sourcemap: !production,
		format: 'iife',
		file: 'public/assets/app.js'
	},
	plugins: [
		svelte({
			dev: !production,
			css: css => {
				css.write('public/assets/app.css');
			},
			customElement: true
		}),

		resolve(),
		commonjs(),

		// Hot reload in dev mode
		!production && livereload('public'),

		// Production build (npm run build)
		production && terser()
	]
};
