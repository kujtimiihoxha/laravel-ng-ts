import gulp from 'gulp';
import size from 'gulp-size';
import cache from 'gulp-cache';
import imagemin from 'gulp-imagemin';
import path from '../paths';
import   elixir from 'laravel-elixir';

var Task = elixir.Task;

elixir.extend('images', function() {
    new Task(
        'images',
        function () {
            return gulp.src(path.app.images)
                .pipe(cache(imagemin({
                    progressive: true,
                    interlaced: true
                })))
                .pipe(gulp.dest(path.build.public.images))
                .pipe(size({title: 'images'}));
        }
    ).watch(path.app.images);
});