const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: "./src/js/app.js",
    another: "./src/js/another.js",
  },
  output: {
    path: path.resolve(__dirname, "public/"),
    filename: "js/[name].bundle.js",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/html/index.html",
      minify: false,
      chunks: ["app"],
    }),
    new HTMLWebpackPlugin({
      filename: "another.html",
      template: "./src/html/another.html",
      minify: false,
      chunks: ["another"],
    }),
  ],
};