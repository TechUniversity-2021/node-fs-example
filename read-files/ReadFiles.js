/* eslint-disable no-await-in-loop */
const fsFunctions = require('../utilities/PromisifiedFsFunctions');
const formatFunctions = require('../format-file-data/FormatFileData');

const readFiles = async (directory) => {
  const fileObject = {};
  const fileArray = await fsFunctions.promisifyReadDir(directory);
  const NO_OF_FILES = fileArray.length;
  for (let i = 0; i < NO_OF_FILES; i += 1) {
    const fileName = fileArray[i];
    const fileKey = formatFunctions.returnOnlyFileName(fileName);
    const fileData = await fsFunctions.promisifyReadFile(`${directory}/${fileName}`);
    const fileValue = formatFunctions.splitIntoArray(fileData);
    fileObject[fileKey] = fileValue;
  }
  return fileObject;
};

module.exports = {
  readFiles,
};
