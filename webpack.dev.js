const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

process.env.NODE_ENV = 'development';

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
  },
  resolve: {
    alias: {
      '~/testhelpers': path.resolve(__dirname, 'test/helpers'),
      '~testhelpers': path.resolve(__dirname, 'test/helpers'),
      '~apiSpecs': path.resolve(__dirname, 'test/apiSpecs'),
      '~/apiSpecs': path.resolve(__dirname, 'test/apiSpecs'),
      '~/config': path.resolve(__dirname, 'graphe/config'),
    },
  },
});
