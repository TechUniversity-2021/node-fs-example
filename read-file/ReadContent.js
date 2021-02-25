const path = require('path');
const fileUtils = require('../file-utils/FileUtils');

// const { name } = path.parse(fileName);

const getData = async (dirName) => {
  const fileNames = await fileUtils.getDirectoryFiles(dirName);
  // console.log(fileNames)

  const result = {};
  for (let i = 0; i < fileNames.length; i++) {
    const fileName = path.parse(fileNames[i]).name;
    // console.log(fileName)
    const fileContent = await fileUtils.getData(`./seed/${fileNames[i]}`);
    // console.log(fileContent)
    // console.log(fileName,fileContent)
    result[fileName] = fileContent;
  }
  return result;
};

 //getData('seed').then(console.log)
