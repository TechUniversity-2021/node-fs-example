const fs = require("fs");

const readAfile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      // console.log(err, data);
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

// console.log(readAfile('/Users/swetha_gumpena/TechUniv/node-fs-example/seed/fruits.txt').then(console.log))

const readDirectory = (dirPath) => {
  return new Promise((resolve,reject) =>{
    fs.readdir(dirPath,"utf-8", (err, data) => {
      // console.log(err, data);
      if (err) {
        reject(err);
      }
      resolve(data);
    })
  })
}

//console.log(readDirectory('/Users/swetha_gumpena/TechUniv/node-fs-example/seed').then(console.log))
module.exports = {readAfile,readDirectory}