var path = require('path');
var gulp = require('gulp');
var gutil = require('gulp-util');
var jasmine = require('gulp-jasmine');
var rimraf = require('gulp-rimraf');
var webpack = require('webpack');
var prodConfig = require('./webpack/prod-webpack.config.js');
var devConfig = require('./webpack/dev-webpack.config.js');
var testConfig = require('./webpack/test-webpack.config.js');
var nodemon = require('gulp-nodemon');

var paths = {
  js: ['src/**/*.js'],
  backend: './dist/backend.js',
  src: 'src',
  dist: 'dist',
  tmp: 'tmp',
};

var port = process.env.PORT || 8080;

gulp.task('build-test', function(callback) {
  webpack(testConfig, function(err, stats) {
    if (err) throw new gutil.PluginError('build-test', err);
    gutil.log('[build-test]', stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('test-jasmine', ['build-test'], function() {
  return gulp.src('tmp/test/**/*.spec.js')
    .pipe(jasmine({
      verbose: true
    }));
})

gulp.task('test', function() {
  gulp.watch(['src/**/*.js', 'test/**/*.js'], ['test-jasmine']);
});

gulp.task('build-dev', function(callback) {
  webpack(devConfig, function(err, stats) {
    if (err) throw new gutil.PluginError('build-dev', err);
    gutil.log('[build-dev]', stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('watch-dev', function() {
  gulp.watch(['src/**/*'], ['build-dev']);
});

gulp.task('web-dev', function(callback) {
  nodemon({
      script: './dist/backend.js',
      ext: 'js',
      watch: './dist'
    })
    .on('restart', function() {
      console.log('restarted!');
    });
});

gulp.task('dev', ['watch-dev', 'web-dev']);

gulp.task('build', ['build-dev', 'build-test']);

gulp.task('clean', function() {
  return gulp.src([paths.dist, paths.tmp], {read: false})
    .pipe(rimraf());
});
