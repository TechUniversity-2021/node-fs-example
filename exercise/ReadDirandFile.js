const fs = require('fs');

const readDir = (__dirname) => new Promise((resolve, reject) => {
  fs.readdir(__dirname, (err, files) => {
    if (err) {
      reject(err);
    }
    resolve(files);
  });
});
const readFileData = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
});

// readDir('./seed/');
module.exports = { readDir, readFileData };
