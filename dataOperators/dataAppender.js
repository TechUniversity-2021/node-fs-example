const path = require('path');
const utils = require('../utils/fileUtils');
const dataReader = require('./dataReader');
const { TEXT_FILES_DIR } = require('../config');

async function appendDataToFile(fileName, items) {
  const filePath = path.join(TEXT_FILES_DIR, fileName);
  items.map((item) => utils.appendFileSync(filePath, item));
  const resultData = await dataReader.readAllFiles(undefined);
  console.log(resultData);
}

module.exports = {
  appendDataToFile,
};
