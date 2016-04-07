import  gulp from 'gulp';
import sourceMaps from 'gulp-sourcemaps';
import elixir from 'laravel-elixir';
import ts  from 'gulp-typescript';
import gulpIf from 'gulp-if';
import uglify from 'gulp-uglify';
import  paths from  '../../gulp/paths'
import  constants from  '../../gulp/constants'
let Task = elixir.Task;

elixir.extend('typescript', () => {
    new Task(
        'typescript',
        () => {
            return gulp.src(constants.typescript.folders)
                .pipe(sourceMaps.init())
                .pipe(ts({
                    "noImplicitAny": true,
                    "suppressImplicitAnyIndexErrors": true,
                    "experimentalDecorators": true,
                    "out": "app.js"
                }))
                .pipe(gulp.dest(paths.build.public.scripts))
                .pipe(gulpIf(elixir.config.production, uglify()))
                .pipe(sourceMaps.write("."))
                .pipe(gulp.dest(paths.build.public.scripts));
        }
    ).watch(`${paths.app.typescript}**/*.+(ts)`);
});