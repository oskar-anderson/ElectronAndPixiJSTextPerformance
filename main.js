const electron = require('electron');
const url = require('url');
const path = require('path');
const { Menu } = require('electron');

const { app, BrowserWindow, ipcMain } = electron;

process.env.NODE_ENV = 'development';
console.log('hello from main.js');

let mainWindow;

app.on('ready', function() {
    // Create new main window
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        width: 960, 
        height: 720,
    }
    );
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: 'file:',
        slashes: true,
    }));

    mainWindow.on('closed', function() {
        app.quit();
    });
})
