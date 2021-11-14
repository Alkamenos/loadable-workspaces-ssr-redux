'use strict';

const webpack = require('webpack');
// const path = require('path');
// const Dotenv = require('dotenv-webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');

const common = {
  output: {
    filename: '[name].bundle.js',
    publicPath: '/public/',
    globalObject: "this",
    library: "umd",
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CaseSensitivePathsPlugin(),

    new webpack.NamedModulesPlugin(),
    // new ForkTsCheckerWebpackPlugin(),
    new LoadablePlugin({
      filename: "loadable-stats.json",
      writeToDisk: true
    }),
  ],
};

module.exports = common;
