const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

/** дев файл **/

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watchOptions: {
    ignored: /node_modules/,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/dist/'),
    },
    compress: true,
    port: 9000,
    hot: true,
  },
});