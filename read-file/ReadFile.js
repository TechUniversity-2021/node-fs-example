const promisifyfs = require('../promisify-contents/PromisifyFileDirectory');

const fileWithContents = async () => {
  const fileNames = await promisifyfs.readDir('../seed');
  const resultObject = {};
  for (let i = 0; i < fileNames.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    const fileContent = await promisifyfs.readFile(`../seed/${fileNames[i]}`);
    // eslint-disable-next-line no-use-before-define
    resultObject[trimFileName(fileNames[i])] = fileContent;
  }

  return resultObject;
};

const trimFileName = (name) => {
  // remove .txt part
  const { length } = name.split('');
  const key = name.slice(0, length - 4);
  return key;
};

// fileWithContents().then(console.log)
module.exports = { fileWithContents, trimFileName };
