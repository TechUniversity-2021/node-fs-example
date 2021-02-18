const fileOps = require('./ReadFiles.js');
const fileUtil = require('./AsyncRead.js');

const files = fileUtil.readDir('./seed');

const content = fileOps.getData('./seed');
let fileNo = 0;

const formatData = () => {
  const obj = {};
  for (let i = 0; i < content.length; i++) {
    const data = content[i].split('\n');
    obj[files[fileNo]] = data;
    fileNo++;
  }
  console.log(obj);
};

const a=formatData()