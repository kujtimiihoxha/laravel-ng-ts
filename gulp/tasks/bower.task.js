/*Elixir Task for bower
 * Upgraded from https://github.com/ansata-biz/laravel-elixir-bower
 */
import gulp from 'gulp';
import mainBowerFiles from 'main-bower-files';
import filter from 'gulp-filter';
import notify from 'gulp-notify';
import cssnano from 'gulp-cssnano';
import uglify from 'gulp-uglify';
import concat_sm from 'gulp-concat-sourcemap';
import concat from 'gulp-concat';
import gulpIf from 'gulp-if';
import path from '../paths';
var concat_to_use = concat;
var Elixir = require('laravel-elixir');

var Task = Elixir.Task;

Elixir.extend('bower', function() {

    var cssFile = 'vendor.css';
    var jsFile = 'vendor.js';

    if (!Elixir.config.production){
        concat_to_use = concat_sm;
    }

    var onError = function (err) {
        notify.onError({
            title: "Laravel Elixir",
            subtitle: "Bower Files Compilation Failed!",
            message: "Error: <%= error.message %>",
            icon: __dirname + '/../node_modules/laravel-elixir/icons/fail.png'
        })(err);
        this.emit('end');
    };

    new Task('bower-js', function() {
        return gulp.src(mainBowerFiles())
            .on('error', onError)
            .pipe(filter('**/*.js'))
            .pipe(concat_to_use(jsFile, {sourcesContent: true}))
            .pipe(gulpIf(Elixir.config.production, uglify()))
            .pipe(gulp.dest(path.build.public.scripts || Elixir.config.js.outputFolder))
            .pipe(notify({
                title: 'Laravel Elixir',
                subtitle: 'Javascript Bower Files Imported!',
                icon: __dirname + '/../node_modules/laravel-elixir/icons/laravel.png',
                message: ' '
            }));
    }).watch('bower.json');


    new Task('bower-css', function(){
        return gulp.src(mainBowerFiles())
            .on('error', onError)
            .pipe(filter('**/*.css'))
            .pipe(concat_to_use(cssFile))
            .pipe(gulpIf(Elixir.config.production, cssnano({safe: true})))
            .pipe(gulp.dest(path.build.public.styles || Elixir.config.css.outputFolder))
            .pipe(notify({
                title: 'Laravel Elixir',
                subtitle: 'CSS Bower Files Imported!',
                icon: __dirname + '/../node_modules/laravel-elixir/icons/laravel.png',
                message: ' '
            }));
    }).watch('bower.json');

});
