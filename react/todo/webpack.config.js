var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
  entry: SRC_DIR + "/app/index.tsx",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?/,
        include: SRC_DIR,
        use: [{ loader: "babel-loader" }],
      },
    ],
  },
  devServer: {
    static: DIST_DIR,
    hot: true,
  },
};

module.exports = config;
