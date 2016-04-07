import gulp from 'gulp';
import size from 'gulp-size';
import flatten from 'gulp-flatten';
import paths from '../paths'
import   elixir from 'laravel-elixir';
var Task = elixir.Task;

elixir.extend('fonts', function() {
    new Task(
        'fonts',
        function () {
            return gulp.src(paths.app.fonts)
                .pipe(flatten())
                .pipe(gulp.dest(paths.build.public.fonts))
                .pipe(size({title: 'fonts'}));
        }
    ).watch(paths.app.fonts);
});