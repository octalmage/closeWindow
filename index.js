var robotjs = require('robotjs');
var process = require('process');

module.exports = function closeWindow () {
  if (process.platform === 'darwin') {
    robotjs.keyTap('q', 'command');
  } else {
    robotjs.keyTap('f4', 'alt');
  }
};
