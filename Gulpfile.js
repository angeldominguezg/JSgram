const gulp = require('gulp')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const babel = require('babelify')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const watchify = require('watchify')

gulp.task('styles', function() {
  gulp
    .src('index.scss')
    .pipe(sass())
    .pipe(gulp.dest('public'))
})
gulp.task('assets', function() {
  gulp.src('assets/*').pipe(gulp.dest('public'))
})

function compile(watch) {
  let bundle = watchify(browserify('./src/index.js'))

  function rebundle() {
    bundle
      .transform(babel, { presets: ['env'] })
      .bundle()
      .on('error', err => {
        console.log(err)
        this.emit('end')
      })
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('public'))
    }

  if (watch) {
    bundle.on('update', () => {
      console.log('-> Bundling...')
      rebundle()
    })
  }

  rebundle()
}

gulp.task('build', () => compile())
gulp.task('watch', () => compile(true))

gulp.task('default', ['styles', 'assets', 'build'])
