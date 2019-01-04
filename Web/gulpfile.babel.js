import gulp, {series, parallel} from 'gulp';
import babel from 'gulp-babel';
import connect from 'gulp-connect';
import uglifyjs from 'gulp-uglify';
import rename from 'gulp-rename';

/**
 * Compilation of JS files
 * @param {*} done 
 */
function compileJS(done) {
    gulp.src('src/js/main.js')
    .pipe(babel({presets: ['env']}))
    .pipe(gulp.dest("build/js"));
    done();
}

function compressJS(done) {
        gulp.src('build/js/main.js')
        .pipe(uglifyjs())
        .pipe(rename({suffix:'.min'})) 
        .pipe(gulp.dest('build/js'));
    
    done();
};

function runLocalServer(done) {
    connect.server({
        root: '.',
        livereload: true,
        port: 8081
    });  
    done();
}


/**
 * Live server
 */
gulp.task('server:local', (done) => {
    runLocalServer(done);
});


/**
 * Build tasks
 */

gulp.task('build:production', series(compileJS));

