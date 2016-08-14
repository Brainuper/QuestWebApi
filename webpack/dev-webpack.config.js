var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var path = require('path');

module.exports = {
  // context: path.join(__dirname, 'src'),
  entry: './src/index',
  output: {
    path: './dist',
    filename: 'backend.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  plugins: [
    new webpack.BannerPlugin('require("source-map-support").install();', {
      raw: true,
      entryOnly: false
    })
  ],
  devTool: '#eval-source-map',
  debug: true,
  target: 'node',
  externals: [nodeExternals()]
};
