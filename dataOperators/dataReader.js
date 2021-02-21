const path = require('path');
const utils = require('../utils/fileUtils');
const { TEXT_FILES_DIR } = require('../config');

async function readAllFiles(strFilter) {
  let filterLength;
  let filesName;

  if (strFilter !== undefined) filterLength = strFilter.length;

  try {
    filesName = await utils.readDir(TEXT_FILES_DIR);
  } catch (err) {
    return {};
  }
  let filesData = await Promise.all(
    filesName.map((name) => {
      // console.log(srcDirDir);
      const newPath = path.join(TEXT_FILES_DIR, name);
      return utils.readFile(newPath);
    }),
  );

  filesData = filesData.map((fileData) => fileData.split('\n')
    .filter((data) => {
      if (data.length !== 0 && (strFilter === undefined
        || data.slice(0, filterLength) === strFilter)) {
        return true;
      }
      return false;
    }));

  const resultItems = {};
  filesName.forEach((name, idx) => {
    resultItems[name] = filesData[idx];
  });

  return resultItems;
}

module.exports = {
  readAllFiles,
};
