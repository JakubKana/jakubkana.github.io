import gulp from 'gulp';
import babel from 'gulp-babel';

function buildCompileJs() {
    gulp.src('src/js/main.js')
    .pipe(babel({presets: ['env']}))
    .pipe(gulp.dest("build/js/index.js"));
};

gulp.task('build:compile:js', (done) => {
    buildCompileJs();
    done();
});


