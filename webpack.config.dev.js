const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const BUILD_DIR = path.resolve(__dirname, "dist/");
const APP_DIR = path.resolve(__dirname, "app/");
const RESOURCES_DIR = path.resolve(__dirname, "resources/");

const config = {
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    path.resolve(APP_DIR, "index.js")
  ],

  output: {
    path: BUILD_DIR,
    filename: "bundle.js",
    publicPath: '/'
  },

  devServer: {
    hot: true,
    contentBase: '/',
    publicPath: '/'
  },

  mode: 'development',

  module: {
    rules: [
      {
        
        test: /\.jsx?/,
        loader: 'babel-loader',
        include: APP_DIR
        
      },
      
      {
        
        test: /\.css/,
        loader:
        "style-loader!css-loader?modules=true&localIndentName=[name]__[local]__[hash:bae64:5]",
        include: APP_DIR
        
      },
      
      {
        
        test: /\.scss$/,
        loader:
        'style-loader!css-loader?importLoaders=1&modules&localIdentName=[local]!sass-loader',
        include: APP_DIR
        
      },

      {
        
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        include: RESOURCES_DIR
        
      }
    ]
  },
  
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: {
        html5: true,
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true
      },
      inject: true
    }),    
  ],
  target: 'electron-renderer'
};

module.exports = config;
