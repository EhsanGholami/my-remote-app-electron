const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')

const settingBtn = document.getElementById('settingBtn')

let mainWindow = require('electron').remote.getGlobal('sharedObject').mainWindow

settingBtn.addEventListener('click', function (event) { 
  const modalPath = path.join('file://', __dirname, 'modal.html')
  settingWindow = new BrowserWindow({ width: 800, height: 600, parent: mainWindow, modal: true, show: false })
  /*settingWindow.on('close', function () { 
    alert("Are u ok 1 ?")
    settingWindow = null 
  })*/
  settingWindow.loadURL(modalPath)
  /*settingWindow.on('closed', function () {
    alert("Are u ok 2 ?")
    settingWindow = null
  })*/
  settingWindow.show()
})
