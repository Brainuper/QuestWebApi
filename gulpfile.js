var path = require('path');
var gulp = require('gulp');
var gutil = require('gulp-util');
var jasmine = require('gulp-jasmine');
var reporters = require('jasmine-reporters');
var webpack = require('webpack');
var prodConfig = require('./webpack/prod-webpack.config.js');
var devConfig = require('./webpack/dev-webpack.config.js');
var testConfig = require('./webpack/test-webpack.config.js');
var nodemon = require('nodemon');

var paths = {
  js: ['src/**/*.js'],
  backend: 'dist/backend.js',
  src: 'src',
  dist: 'dist',
  tmp: 'tmp',
};

var port = process.env.PORT || 8080;

gulp.task("webpack:build-test", function(callback) {
  webpack(testConfig, function(err, stats) {
    if (err) throw new gutil.PluginError("webpack:build", err);
    gutil.log("[webpack:build-test]", stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task("test-jasmine", ["webpack:build-test"], function() {
  return gulp.src("tmp/backend.spec.js")
    .pipe(jasmine());
})

gulp.task("test", function() {
  gulp.watch(["src/**/*.js", "test/**/*.js"], ["test-jasmine"]);
});

// gulp.task("build-dev", ["webpack:build-dev"], function() {
//   gulp.watch(["src/**/*"], ["webpack:build-dev"]);
// });
//
// gulp.task('build', ['webpack:build']);
//
// gulp.task('webpack:build', function(callback) {
//   webpack(prodConfig, function(err, stats) {
//     if (err) throw new gutil.PluginError("webpack:build", err);
//     gutil.log("[webpack:build]", stats.toString({
//       colors: true
//     }));
//     callback();
//   });
// });
//
// gulp.task("webpack:build-dev", function(callback) {
//   webpack(devConfig, function(err, stats) {
//     if (err) throw new util.PluginError("webpack:build-dev", err);
//     gutil.log("[webpack:build-dev]", stats.toString({
//       colors: true
//     }));
//     callback();
//   });
// });



// gulp.task("webpack-dev-server", function(callback) {
//   nodemon({
//     execMap: {
//       js: 'node'
//     },
//     script: path.join(__dirname, paths.backend),
//     ignore: ['*'],
//     watch: ['dist'],
//     ext: 'noop'
//   }).on('restart', function() {
//     console.log('Restarted!');
//   });
// });
