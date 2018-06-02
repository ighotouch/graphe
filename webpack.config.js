const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractStyle = new ExtractTextPlugin({
  filename: '[name].css',
});

module.exports = {
  entry: {
    frontend: './frontend/index.js',
    styles: [
      './frontend/index.js',
      path.resolve(__dirname, 'static/stylesheets/style.scss'),
    ],
  },
  devServer: {
    contentBase: './public',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[id].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['env'] }
      },
      {
        test: /\.scss$/,
        use: extractStyle.extract({
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  plugins: [
    extractStyle,
  ],
};
