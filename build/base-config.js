const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = (isDev, mode) => {
  const filename = (ext) => (isDev ? `[name].[hash].${ext}` : `[name].${ext}`);
  const svgSpriteRegex = /assets[\\/]sprite\.svg$/;
  
  const jsLoaders = () => {
    return [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ];
  };
  
  const cssLoaders = (extra) => {
    const loaders = [
      'vue-style-loader',
      'css-loader',
    ];
    
    if (extra) {
      loaders.push(extra);
    }
    
    return loaders;
  };
  
  return {
    context: path.resolve(__dirname, '../src'),
    mode,
    entry: {
      app: './app.js',
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/',
      filename: filename('js'),
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    resolve: {
      extensions: ['.js', '.vue', '.svg'],
      alias: {
        '@': path.resolve(__dirname, '../src'),
        '@img': path.resolve(__dirname, '../assets/img'),
        '@icons': path.resolve(__dirname, '../assets/icons'),
      },
    },
    plugins: [
      new ESLintPlugin(),
      new ProgressBarPlugin(),
      new VueLoaderPlugin(),
      new CleanWebpackPlugin(),
      new HTMLWebpackPlugin({
        template: '../index.html',
        minify: {
          collapseWhitespace: !isDev,
        },
      }),
      new MiniCssExtractPlugin({
        filename: filename('css'),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: jsLoaders(),
        },
        {
          test: /\.css$/,
          use: cssLoaders(),
        },
        {
          test: /\.s[ac]ss$/,
          use: cssLoaders({
            loader: 'sass-loader',
            options: {
              additionalData: '@import "~@/styles/_colors.scss";',
            },
          }),
        },
        {
          test: /\.(png|jpg|svg|gif)$/i,
          exclude: svgSpriteRegex,
          use: 'file-loader',
        },
        {
          test: /\.(woff2?|eot|ttf|otf)$/i,
          use: 'file-loader',
        },
        {
          test: svgSpriteRegex,
          loader: 'raw-loader',
        },
      ],
    },
  };
};
