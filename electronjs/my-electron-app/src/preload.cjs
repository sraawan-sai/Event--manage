const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  fetchData: (url) => ipcRenderer.invoke('fetch-data', url),
});
