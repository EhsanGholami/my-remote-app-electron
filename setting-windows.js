const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')

const settingBtn = document.getElementById('settingBtn')

settingBtn.addEventListener('click', function (event) {
  //alert('ssssssssssssssssssssssssssssssssss');
  
  const modalPath = path.join('file://', __dirname, 'modal.html')
  settingWindow = new BrowserWindow({ width: 800, height: 600, /*parent: mainWindow,*/ modal: true, frame: false })
  settingWindow.on('close', function () { settingWindow = null })
  settingWindow.loadURL(modalPath)
  settingWindow.show()
})
