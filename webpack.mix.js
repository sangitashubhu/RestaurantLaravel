const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//     .sass('resources/sass/app.scss', 'public/css');
mix.styles([
	'resources/css/bootstrap.min.css',
	'resources/css/styles.css',
	],'public/css/all.css');

mix.scripts([
	'resources/js/jquery.js',
	'node_modules/bootstrap/dist/js/bootstrap.js',
	'resources/js/master.js'
	],'public/js/all.js');