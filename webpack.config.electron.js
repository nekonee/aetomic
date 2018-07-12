const webpack = require('webpack');
const path = require('path');
const hP = require('happypack');


module.exports = env => {
  let entry = env && env.LINUX ? './server/main.dev.linux.js' :
      '/server/main.dev.js';

  return {
    entry: entry,
    output: {
      path: __dirname,
      filename: 'bundle.electron.js'
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new hP({
        id: 'jsx',
        loaders: [ 'babel-loader' ]
      })
    ],
    node: {
      fs: 'empty',
      __dirname: false,
      __filename: false
    },
    target: 'electron-main'
  }  
};
