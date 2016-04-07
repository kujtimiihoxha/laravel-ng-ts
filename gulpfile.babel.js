import elixir from 'laravel-elixir';
import './gulp/tasks/typescript.task';
import './gulp/tasks/templates.task';
import './gulp/tasks/images.task';
import './gulp/tasks/fonts.task';
import './gulp/tasks/bower.task';
import './gulp/tasks/tsref.task';
import 'laravel-elixir-livereload';
import 'laravel-elixir-karma';

import paths from './gulp/paths'
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix
        .images()
        .fonts()
        .bower()
        .tsref()
        .typescript()
        .templates()
        .sass([paths.app.styles],paths.build.public.styles)
        .version(paths.assets)
        .copy('public/fonts/**/*.{eot,svg,ttf,woff,woff2}', 'public/build/fonts')
        .copy('public/images/**/*.{png,gif,jpg,jpeg}', 'public/build/images')
        .livereload(
            'public/build/rev-manifest.json',
            {
                liveCSS: true
            }
        )
        .karma({
            jsDir: paths.karmaJsDir
        });

});
