const fs = require('fs');
const path = require('path');
const read = require('./Read');
// const directoryPath =

async function getAllFilesData(src) {
  const items = {};
  const fileNames = await read.readDir(src);
  let filesData = fileNames.map(async (name) => {
    const newPath = path.join(src, name);
    return await read.fread(newPath);
  });
  filesData = await Promise.all(filesData);
  filesData = filesData.map((data) => data.split('\n').filter((el) => el.length != 0));
  fileNames.forEach((name, idx) => {
    items[name] = filesData[idx];
  });

  return items;
}

module.exports = {
  getAllFilesData,
};
