const readOp = require('./ReadDirandFile');

async function getFileContent(dirname) {
  const obj = {};
  const arrOfFiles = await readOp.readDir(dirname);
  let key;
  let data;
  for (let start = 0; start < arrOfFiles.length; start++) {
    data = await readOp.readFileData(dirname + arrOfFiles[start]);
    key = arrOfFiles[start].slice(0, arrOfFiles[start].length - 5);
    obj[key] = data.split('\n');
  }
  return obj;
}
module.exports = {
  getFileContent,
};
