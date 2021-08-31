const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: path.resolve(__dirname, "public/"),
    filename: "js/bundle.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/html/index.html",
      minify: false,
    }),
  ],
};