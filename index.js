var robotjs = require('robotjs');
var process = require('process');

if (process.platform === 'darwin') {
  robotjs.keyTap('q', 'command');
} else {
  robotjs.keyTap('f4', 'alt');
}
