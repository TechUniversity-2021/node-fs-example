const fileOps = require('./ReadFiles.js');
const fileUtil = require('./AsyncRead.js');

const files = fileUtil.readDir('./seed');

// const content = await fileOps.getData('./seed');
// console.log(content);
let fileNo = 0;

const formatData = async () => {
  const content = await fileOps.getData('./seed');
  // console.log(content);
  const obj = {};
  for (let i = 0; i < content.length; i++) {
    const data = content[i].split('\n');
    obj[files[fileNo]] = data;
    fileNo++;
  }
  console.log(obj);
  return (obj);
};

