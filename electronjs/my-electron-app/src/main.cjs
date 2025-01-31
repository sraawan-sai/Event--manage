const { app, BrowserWindow } = require('electron');
const path = require('path');

const isDev = process.env.NODE_ENV !== 'production'; // Set development mode
console.log('Development mode:', isDev);

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true
    },
    resizable: true
  });

  const devURL = 'http://localhost:5173';

  mainWindow.loadURL(devURL).catch(err => {
    console.error('Failed to load URL:', err);
  });

//hide default menu 
mainWindow.setMenu(null);



  mainWindow.on('closed', () => {
    console.log('Window closed'); // Log window closure
  });
}

app.whenReady().then(createWindow).catch(err => {
  console.error('Error during app start:', err);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow().catch(err => {
      console.error('Error reactivating window:', err);
    });
  }
});
