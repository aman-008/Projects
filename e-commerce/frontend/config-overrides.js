const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = function override(config, env) {
  config.plugins.push(new ESLintPlugin({
    extensions: ['js', 'jsx'],
  }));
  return config;
};
