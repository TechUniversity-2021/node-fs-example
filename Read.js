const fs = require('fs');

function fread(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

function readDir(dirname) {
  return new Promise((resolve, reject) => {
    fs.readdir(dirname, (err, files) => {
      if (err) reject(err);
      resolve(files);
    });
  });
}

module.exports = {
  fread,
  readDir,
};
