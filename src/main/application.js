import electron, { app } from 'electron'
import MainWindow from './main-window'

export default class Application {
  onReady() {
    this.mainWindow = new MainWindow();
  }

  run() {
    this.startCrashReporter();
    this.registerApplicationCallbacks();
  }

  registerApplicationCallbacks() {
    app.on('window-all-closed', () => {});
    app.on('ready', () => { this.onReady() });
  }

  startCrashReporter() {
    electron.crashReporter.start();
  }
}
