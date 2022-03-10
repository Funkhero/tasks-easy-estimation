const path = require('path');
const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  devServer: {
    host: process.env.HOST,
    port: process.env.PORT,
    watchFiles: ['src/**/*', 'assets/**/*'],
    historyApiFallback: true,
  },
  plugins: [
    new webpack.WatchIgnorePlugin({
      paths: [path.join(__dirname, 'node_modules')],
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessinfo: {
        messages: ['App is running on localhost'],
      },
      omErrors: (sev, errors) => {
        console.log('severity = ', sev);
        console.log('errors = ', errors);
      },
      clearConsole: true,
    }),
  ],
};
