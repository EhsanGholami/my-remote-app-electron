const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')

const settingBtn = document.getElementById('settingBtn')

settingBtn.addEventListener('click', function (event) {
alert('ssssssssssssssssssssssssssssssssss');
  const modalPath = path.join('file://', __dirname, 'modal.html')
  let sWin = new BrowserWindow({ width: 800, height: 600 })
  sWin.on('close', function () { sWin = null })
  sWin.loadURL(modalPath)
  sWin.show()
})
