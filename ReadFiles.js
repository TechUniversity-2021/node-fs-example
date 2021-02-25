const path = require('path');
const fileOps = require('./AsyncRead.js');
const fileFilter = require('./filterData.js');

const readFiles = async (directory, startingChar) => {
  const files = await fileOps.readDir(directory);
  const fileNames = files.map((fileName) => path.parse(fileName).name);
  const filesData = await Promise.all(files.map((fileName) => fileOps.readFile(`${directory}/${fileName}`)));
  const fileObj = {};
  let i = 0;
  filesData.forEach((file) => {
    const fileValue = fileFilter.splitByStartChar(file, startingChar);
    fileObj[fileNames[i]] = fileValue;
    i += 1;
  });

  console.log(fileObj);
  return fileObj;
};

readFiles('./seed', 'k');
module.exports = {
  readFiles,
};
