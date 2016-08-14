var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './test/index',
  output: {
    path: 'tmp/test',
    filename: 'backend.spec.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /sinon.*\.js$/,
      loader: "imports?define=>false,require=>false"
    }],
  },
  plugins: [
    new webpack.BannerPlugin('require("source-map-support").install();', {
      raw: true,
      entryOnly: false
    })
  ],
  devTool: '#eval-source-map',
  target: 'node',
  externals: [nodeExternals()]
};
