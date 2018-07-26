const webpack = require("webpack");
const path = require("path");
const happypack = require("happypack");


module.exports = env => {
  let entry =  "./server/main.dev.js";

  return {
    entry: entry,
    output: {
      path: __dirname,
      filename: "bundle.electron.js"
    },
    mode: "development",
    module: {
      rules: [
        {
          test: /.jsx?$/,
          use: "happypack/loader?id=jsx",
          exclude: /node-modules/
        },
        {
          test: /.node$/,
          use: "node-loader"
        }
      ]
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new happypack({
        id: "jsx",
        loaders: [ "babel-loader" ]
      })
    ],
    node: {
      fs: "empty",
      __dirname: false,
      __filename: false
    },
    target: "electron-main"
  };
};
