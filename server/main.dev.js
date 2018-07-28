const { default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } = require('electron-devtools-installer');
const{ app, nativeImage, BrowserWindow, Menu } = require('electron');
const platform = require('electron-platform');
const path = require('path');
const url = require('url');

function makeWindow(){
  win = new BrowserWindow({
    width: 600,
    height: 600,
    show: false,
    center: true,
    webPreferences:{
      experimentalFeatures: true,
      webSecurity: false
    },
    
  });

  win.setTitle(`aetomic`);

  win.loadUrl(url.format({
    pathname: 'localhost:8080',
    protocol: 'http',
    slashes: true
  }));
  
  win.once('ready-to-show', () =>
           win.show()
          );
  
  win.on('closed', () => {
    win = null;
  });

  win.webContents.openDevTools();

  app.on('ready', createWindow);

  app.on('window-all-closed', () => {
    app.quit();
  });
};
