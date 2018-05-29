const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const extractStyle = new ExtractTextPlugin({
  filename: '[name].css',
});

module.exports = {
  entry: {
    styles: [
      './frontend/index.js',
      path.resolve(__dirname, 'static/stylesheets/style.scss'),
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/stylesheets'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractStyle.extract({
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    extractStyle,
  ],
};
