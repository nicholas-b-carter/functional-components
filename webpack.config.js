var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: '',
  output: {
    library: 'functional-components',
    libraryTarget: 'umd',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    preloaders: [
      {
        test: /\.jsx?$/,
        loader: 'remove-flow-types',
        include: path.join(__dirname, 'src')
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};
