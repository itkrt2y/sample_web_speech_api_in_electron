import { BrowserWindow } from 'electron';

export default class MainWindow {
  constructor() {
    this.window = new BrowserWindow({ width: 800, height: 600 });
    this.window.loadURL(`file://${__dirname}/../renderer/index.html`);
    if (process.env.NODE_ENV === 'development') {
      this.window.webContents.openDevTools();
    }
    this.window.on('closed', () => {
      this.window = null;
    });
  }
}
