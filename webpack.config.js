const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractStyle = new ExtractTextPlugin({
  filename: '[name].css',
});

module.exports = {
  mode: 'production',
  entry: {
    frontend: './frontend/index.js',
    styles: [
      './frontend/index.js',
      path.resolve(__dirname, 'assets/stylesheets/style.scss'),
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
  plugins: [extractStyle],
};
