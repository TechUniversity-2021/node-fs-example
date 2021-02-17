const fs = require('fs');

const readData = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(err);
    }
    resolve(data);
  });
});

const readDir = (dirPath) => new Promise((resolve, reject) => {
  fs.readdir(dirPath, 'utf-8', (err, files) => {
    // console.log(err, data);
    if (err) {
      reject(err);
    }
    resolve(files);
  });
});

// readDir('./seed').then(console.log);

module.exports = { readData, readDir };
