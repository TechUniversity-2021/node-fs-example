const fileOps = require('../utils/PromisifyFileRead');
const dirOps = require('../utils/PromisifyDirectoryRead');

async function readDirFiles(dirName) {
  const dirContent = await dirOps.promisifyDirectory(dirName);
  return dirContent;
}

async function readFileByFile() {
  const dirFileNames = await readDirFiles('../seed');
  // eslint-disable-next-line no-return-await
  return await Promise.all(dirFileNames.map(async (data) => {
    const dict = {};
    dict[data] = (await fileOps.promisifyFs(`../seed/${data}`)).split('\n');
    return dict;
  }));
}

// (async function () {
//     const content = await readFileByFile()
//     console.log(content)
// })()
// readOneFile(dirValue[0]).then(console.log)
// promisifyDirectory('../seed').then((data) => console.log(data[0]))

module.exports = { readFileByFile };
