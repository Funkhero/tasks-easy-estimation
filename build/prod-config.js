const webpack = require('webpack');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const optimization = () => {
  return {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin(),
    ],
  };
};

module.exports = {
  optimization: optimization(),
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
};