var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index',
  output: {
    path: './build',
    filename: 'backend.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          plugins: ['transform-export-extensions']
        }
      }, {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    root: [
      path.resolve('src/app'),
      path.resolve('src/config'),
      path.resolve('src/util')
    ]
  }
};
