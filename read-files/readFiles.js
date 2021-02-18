/* eslint-disable quotes */
const seedFolder = "seed";
const path = require("path");
const fileUtils = require("../file-utils/fileUtils");

function createObject(fileData) {
  const fileNames = fileData[0];
  const fileContent = fileData[1];
  const allFileMappedData = {};
  for (const index in fileNames) {
    allFileMappedData[path.basename(fileNames[index], ".txt")] = fileContent[
      index
    ].split("\n");
  }
  return allFileMappedData;
}

async function populateDataUsingMap(dirName) {
  const files = await fileUtils.getDirectoryFiles(dirName);
  const allFileContent = files.map(async (file) => {
    const fileContent = await fileUtils.getFileData(`${dirName}/${file}`);
    return fileContent;
  });
  const allPromise = await Promise.all(allFileContent);
  return [files, allPromise];
}

populateDataUsingMap(seedFolder)
  .then((fileData) => createObject(fileData))
  .then(console.log);
module.exports = { populateDataUsingMap };
