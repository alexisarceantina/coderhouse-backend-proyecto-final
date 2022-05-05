const path = require("path");
const nodeExternals = require("webpack-node-externals");
const NodemonPlugin = require("nodemon-webpack-plugin");

module.exports = {
  target: "node",

  entry: {
    app: path.resolve(__dirname, "src", "server.js"),
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  externals: [nodeExternals()],

  experiments: {
    topLevelAwait: true,
  },

  plugins: [new NodemonPlugin()],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
