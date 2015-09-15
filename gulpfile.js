var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');

var bundler = watchify(browserify({
  entries: ['./src/app.jsx'],
  transform: [reactify],
  extensions: ['.jsx'],
  debug: true,
  cache: {},
  packageCache: {},
  fullPaths: true
}));

function bundle (file) {
  if (file) gutil.log('Recompiling ' + file);
  return bundler
    .bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify error'))
    .pipe(source('main.js'))
    .pipe(gulp.dest('./'));
};
bundler.on('update', bundle);

gulp.task('build', function () {
  bundle();
});

gulp.task('default', ['build']);
