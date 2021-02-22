const path = require('path');
const fileOps = require('./AsyncRead.js');

const obj = {};
const getData = async (directory) => {
  const files = await fileOps.readDir(directory);

  const fileData = files.map(async (file) => fileOps.readData(`${directory}/${file}`),
    // const content = await fileOps.readData(`./seed/${file}`);
    // return content;
  );

  const allPromise = await Promise.all(fileData);
  return allPromise;
};

getData('./seed').then((data) => data);

// const getData = async (directory) => {
//   const finalObject = {};
//   const files = await fileOps.readDir(directory);
//   const noOfFiles = files.length;
//   for (let i = 0; i < noOfFiles; i += 1) {
//     const file = files[i];
//     const content = await fileOps.readData(`${directory}/${file}`);
//     const conArray = content.split('\n');
//     finalObject[file] = conArray;
//   }
//   console.log(finalObject);
//   return finalObject;
// };

getData('./seed');
module.exports = {
  getData,
};
