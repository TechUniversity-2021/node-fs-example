const fileOps = require('./AsyncRead.js');

const getData = async () => {
  const files = await fileOps.readDir('./seed');

  files.forEach(async (file) =>
  {
    
  })
  const fileOneContent = await fileOps.readData(`./seed/${files[0]}`);
  const fileTwoContent = await fileOps.readData(`./seed/${files[1]}`);
  const fileThreeContent = await fileOps.readData(`./seed/${files[2]}`);
  const arr1 = fileOneContent.split('\n');
  const arr2 = fileTwoContent.split('\n');
  const arr3 = fileThreeContent.split('\n');

  const obj = {};
  obj[files[0]] = arr1;
  obj[files[1]] = arr2;
  obj[files[2]] = arr3;

  return obj;
};
// (async () => {
//   const secretMessage = await getData();
//   console.log(secretMessage);
// })();

module.exports = {
  getData,
};
