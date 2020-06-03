const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = (isDev) => {
  const filename = (ext) => (isDev ? `[name].[hash].${ext}` : `[name].${ext}`);
  
  const jsLoaders = () => {
    const loaders = [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ];
    
    if (isDev) {
      loaders.push('eslint-loader');
    }
    
    return loaders;
  };
  
  const cssLoaders = (extra) => {
    const loaders = [
      'vue-style-loader',
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: isDev,
          reloadAll: true,
        },
      },
      'css-loader',
    ];
    
    if (extra) {
      loaders.push(extra);
    }
    
    return loaders;
  };
  
  return {
    context: path.resolve(__dirname, '../src'),
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
      extensions: ['.js', '.vue'],
      alias: {
        '@': path.resolve(__dirname, '../src'),
        '@img': path.resolve(__dirname, '../assets/img'),
        '@icons': path.resolve(__dirname, '../assets/icons'),
      },
    },
    plugins: [
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
              prependData: '@import "~@/styles/_colors.scss";',
            },
          }),
        },
        {
          test: /\.(png|jpg|svg|gif)$/,
          use: ['file-loader'],
        },
        {
          test: /\.(woff2?|eot|ttf|otf)$/,
          use: 'file-loader',
        },
      ],
    },
  };
};
