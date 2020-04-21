const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = (isDev) => {
  const filename = ext => isDev ? `[name].[hash].${ext}` : `[name].${ext}`;
  
  return {
    context: path.resolve(__dirname, '../src'),
    entry: {
      app: './app.js',
    },
    output: {
      filename: filename('js'),
      path: path.resolve(__dirname, '../dist'),
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@img': path.resolve(__dirname, 'assets/img'),
        '@icons': path.resolve(__dirname, 'assets/icons'),
      },
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: './index.html',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-class-properties'],
              },
            },
          ],
        },
      ],
    },
  }
};