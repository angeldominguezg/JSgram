const gulp = require('gulp')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const babel = require('babelify')
const browserify = require('browserify')
const source = require('vinyl-source-stream')

gulp.task('styles', function() {
  gulp
    .src('index.scss')
    .pipe(sass())
    .pipe(gulp.dest('public'))
})
gulp.task('assets', function() {
  gulp.src('assets/*').pipe(gulp.dest('public'))
})
gulp.task('scripts', function() {
  browserify('./src/index.js')
    .transform(babel, { presets: ['env'] })
    .bundle()
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('public'))
})
gulp.task('default', ['styles', 'assets', 'scripts'])
