const path = require('path');
const fsFunctions = require('../utilities/PromisifiedFsFunctions');
const formatFunctions = require('../format-file-data/FormatFileData');

const writeFiles = async (filePath, arrayOfWords) => {
  try {
    const dataToBeWritten = arrayOfWords.reduce((accumulator, word) => `${accumulator}${word}\n`, '');
    await fsFunctions.appendFile(filePath, dataToBeWritten);
    const fileData = await fsFunctions.readFile(`${filePath}`);
    const fileVaue = formatFunctions.splitIntoArray(fileData);
    const fileKey = path.parse(filePath).name;
    return {
      [fileKey]: fileVaue,
    };
  } catch (error) {
    throw new Error('Problem accessing files');
  }
};
module.exports = {
  writeFiles,
};
