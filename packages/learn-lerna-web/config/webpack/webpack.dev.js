const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = (options) => {
  var entry = {};

  Object.keys(common.entry).forEach((e) => {
    entry[e] = ['webpack-hot-middleware/client'];
  });

  console.log(common.entry);

  console.log(entry);

  var plugins = common.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
    }),
  ]);

  return merge.smartStrategy({
    entry: 'append',
  })(common, {
    entry: entry,

    mode: 'development',

    plugins: plugins,

    devtool: 'source-map',
  });
};
