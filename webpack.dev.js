const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
  },
  // module: {
  //   rules: [{ enforce: 'pre', test: /\.js?x$/, loader: 'eslint-loader' }],
  // },
});
