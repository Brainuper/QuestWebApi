var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './test/index',
  output: {
    path: 'tmp/test',
    filename: 'backend.spec.js'
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
      }, {
        test: /sinon.*\.js$/,
        loader: "imports?define=>false,require=>false"
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('test')
      }
    })
  ],
  target: 'node',
  externals: [nodeExternals()],
  devtool: 'eval',
  resolve: {
    root: [
      path.resolve('src/app'),
      path.resolve('src/config'),
      path.resolve('src/util')
    ]
  }
};
