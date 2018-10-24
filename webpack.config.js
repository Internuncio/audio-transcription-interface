const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html",
});

const copyWebpackPlugin = new CopyWebpackPlugin([
  'styles/app.css',
], {});

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'app'),
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: [{ loader: 'babel-loader' }] },
      { test: /\.jsx$/, exclude: /node_modules/, use: [{ loader: 'babel-loader' }] },
      { test: /\.css$/, use: [{ loader: 'css-loader' }, { loader: 'style-loader' }] },
    ],
  },
  plugins: [htmlPlugin, copyWebpackPlugin],
};
