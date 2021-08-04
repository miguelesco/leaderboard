/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin');
/* eslint-disable */
const path = require('path');

const scssRules = {
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    'style-loader',
    // Translates CSS into CommonJS
    'css-loader',
    // Compiles Sass to CSS
    'sass-loader',
  ],
};

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js',
  },
  devServer: {
    contentBase: './dist',
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Webpack Project',
    template: 'src/index.html',
  })],
  module: {
    rules: [scssRules],
  },

};