const path = require('path');
const webpack = require('webpack');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
	devtool: 'source-map',
	devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT,
		hot: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
      ignored: /node_modules/
    },
	},
  plugins: [
    new webpack.WatchIgnorePlugin([
      path.join(__dirname, 'node_modules')
    ]),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessinfo: {
        messages: ['App is running on localhost']
      },
      omErrors: (sev, errors) => {
        console.log('severity = ',sev);
        console.log('errors = ',errors);
      },
      clearConsole: true
    }),
	]
};
