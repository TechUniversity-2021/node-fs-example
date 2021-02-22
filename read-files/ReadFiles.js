const path = require('path');
const fsFunctions = require('../utilities/PromisifiedFsFunctions');
const formatFunctions = require('../format-file-data/FormatFileData');

const readFiles = async (directory) => {
  try {
    const fileArray = await fsFunctions.readDir(directory);
    const fileNames = fileArray.map((fileName) => path.parse(fileName).name);
    const filesData = await Promise.all(fileArray.map((fileName) => fsFunctions.readFile(`${directory}/${fileName}`)));
    const fileObject = filesData.reduce((accumulator, fileContent, index) => {
      const fileValue = formatFunctions.splitIntoArray(fileContent);
      return {
        ...accumulator,
        [fileNames[index]]: fileValue,
      };
    }, {});
    return fileObject;
  } catch (error) {
    throw new Error('Problem accessing files');
  }
};

module.exports = {
  readFiles,
};
