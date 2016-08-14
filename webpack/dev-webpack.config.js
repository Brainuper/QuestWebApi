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
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
  target: 'node',
  externals: [nodeExternals()]
};
