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
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /sinon.*\.js$/,
      loader: "imports?define=>false,require=>false"
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('test')
      }
    })
  ],
  target: 'node',
  externals: [nodeExternals()]
};
