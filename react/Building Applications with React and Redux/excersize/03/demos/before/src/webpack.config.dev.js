const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.export = {
  mode: "development",
  target: "web",
  devTool: "cheap-module-source-map",
  entry: ".src/index",
  output: {
    path: path.resolve(__dirnam, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    stats: "minimal",
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false,
  },
  plugins: new HtmlWebpackPlugin({
    template: "src/index.html",
    favicon: "src/favicon.ico",
  }),
};
