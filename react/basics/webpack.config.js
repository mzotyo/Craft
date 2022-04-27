var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        use: [
          { loader: "babel-loader" }
        ]
      }
    ]
  },
  devServer: {
    static: DIST_DIR,
    hot: true
  }
};

module.exports = config;
