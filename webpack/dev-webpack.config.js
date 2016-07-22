var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index',
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'backend.js',
    pathinfo: true
  },
  externals: nodeModules,
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  // plugins: [
  //   new webpack.BannerPlugin('require("source-map-support").install();', {
  //     raw: true,
  //     entryOnly: false
  //   })
  // ],
  // devTool: '#eval-source-map',
  debug: true
}
