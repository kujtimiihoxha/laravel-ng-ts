import gulp from 'gulp';
import   ngHtml2Js from 'gulp-ng-html2js';
import   minifyHtml from 'gulp-htmlmin';
import   uglify from 'gulp-uglify';
import   gulpIf from 'gulp-if';
import   concat from 'gulp-concat';
import   elixir from 'laravel-elixir';
import constants from '../constants';
import paths from '../paths';

elixir.extend('templates', () => {
    let pth = new elixir.GulpPaths()
        .src(paths.app.templates)
        .output(paths.build.public.scripts, constants.templates.out);
    new elixir.Task('templates', () => {
        return gulp.src(pth.src.path)
            .pipe(gulpIf(elixir.config.production, minifyHtml({
                empty: true,
                spare: true,
                quotes: true
            })))
            .pipe(ngHtml2Js(constants.templates.options))
            .pipe(concat(pth.output.name))
            .pipe(gulpIf(elixir.config.production, uglify()))
            .pipe(gulp.dest(pth.output.baseDir));
    }).watch(paths.app.templates);
});
