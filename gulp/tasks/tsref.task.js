import gulp from 'gulp';
import elixir from 'laravel-elixir';
import inject from 'gulp-inject';
import paths from '../paths'
var Task = elixir.Task;

elixir.extend('tsref', function() {
    new Task(
        'tsref',
        function () {
            var target = gulp.src(paths.typescriptReferences);
            var sources = gulp.src([`${paths.app.typescript}**/*.+(ts)`], {read: false});
            return target.pipe(inject(sources, {
                starttag: '//{',
                endtag: '//}',
                transform: function (filepath) {
                    return '/// <reference path="..' + filepath + '" />';
                }
            })).pipe(gulp.dest(paths.typings));
        }
    );
});