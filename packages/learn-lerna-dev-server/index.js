const webpack = require('webpack');
const devmiddleware = require('webpack-dev-middleware');
const hotmiddleware = require('webpack-hot-middleware');
const config = require('../learn-lerna-web/webpack.config');
const express = require('express');
const app = express();

var compiler = webpack(config);

app.use(devmiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
  },
}));

app.use(hotmiddleware(compiler, {}));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

module.exports = app;
