const fs = require('fs');

function appendFileSync(path, data) {
  return new Promise((resolve, reject) => {
    fs.appendFileSync(path, `${data}\n`, (err) => {
      if (err) reject(err);
      resolve('finish');
    });
  });
}

function writeFileStream(path, data) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path);
    if (data !== undefined) {
      data.forEach((chunk) => file.write(`${chunk}\n`));
    }
    file.end();
    file.on('finish', resolve('finish'));
    file.on('error', reject(Error('error')));
  });
}

function truncateFile(path) {
  return new Promise((resolve, reject) => {
    fs.truncate(path, 0, (err) => {
      if (err) reject(err);
      resolve('finish');
    });
  });
}

function readFile(path) {
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
  appendFileSync,
  readFile,
  readDir,
  writeFileStream,
  truncateFile,

};
