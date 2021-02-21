const path = require('path');
const utils = require('../utils/fileUtils');
const dataReader = require('./dataReader');
const { TEXT_FILES_DIR } = require('../config');

async function deleteDataFromFile(fileName, strFilter) {
  const filePath = path.join(TEXT_FILES_DIR, fileName);
  let filterLength;
  let fileData;

  if (strFilter !== undefined) filterLength = strFilter.length;

  try {
    fileData = await utils.readFile(filePath);

    const filterData = fileData.split('\n').filter((data) => {
      if (data.length === 0 || (strFilter !== undefined
        && data.slice(0, filterLength) === strFilter)) {
        return false;
      }
      return true;
    });

    if (filterData.length === 0) {
      await utils.truncateFile(filePath);
    } else {
      await utils.writeFileStream(filePath, filterData);
    }

    const resultData = await dataReader.readAllFiles(undefined);
    console.log(resultData);
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = {
  deleteDataFromFile,
};
