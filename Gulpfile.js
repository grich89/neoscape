const gulp = require('gulp');

// Include Plugins
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sassFiles = 'scss/**/*.scss';
const sourcemaps = require('gulp-sourcemaps');

// .pipe(errorHandler())
gulp.task('sass', () => {
    return gulp.src(sassFiles)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('css/'))
        .pipe(rename('style.css'))
        .pipe(sourcemaps.write('css/'))
        .pipe(gulp.dest('css/'));
});

//browser-sync setup--will become your default task
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        open: true
    });
    gulp.watch(['scss/*.scss', 'scss/**/*scss'], ['sass']);
    gulp.watch("js/*.js").on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);

    // watch css and stream to BrowserSync when it changes
    gulp.watch('css/style.css', function() {
        gulp.src('css/style.css')
            .pipe(browserSync.stream());
    });
});

// Default Task
gulp.task('default', ['serve']);
