const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractStyle = new ExtractTextPlugin({
  filename: '[name].css',
});

module.exports = {
  entry: {
    frontend: './frontend/index.js',
    styles: [
      './frontend/index.js',
      path.resolve(__dirname, 'assets/stylesheets/style.scss'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|graphql)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: ['import-graphql', 'graphql-tag'],
        },
      },
      {
        test: /\.scss$/,
        use: extractStyle.extract({
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx', '.graphql'] },
  plugins: [
    extractStyle,
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Production',
    }),
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[id].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
};
