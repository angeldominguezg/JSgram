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
  let bundle = browserify('./src/index.js')

  if (watch) {
    bundle = watchify(bundle)
    bundle.on('update', () => {
      console.log('-> Bundling...')
      rebundle()
    })
  }

  function rebundle() {
    bundle
      .transform(babel, {
        presets: ['env'],
        plugins: ['syntax-async-functions', 'transform-regenerator']
      })
      .bundle()
      .on('error', err => {
        console.log(err)
        this.emit('end')
      })
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('public'))
  }

  rebundle()
}

gulp.task('build', () => compile())
gulp.task('watch', () => compile(true))

gulp.task('default', ['styles', 'assets', 'build'])
