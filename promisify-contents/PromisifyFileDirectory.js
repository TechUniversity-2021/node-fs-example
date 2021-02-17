const fs = require('fs');


const readDir = (dirPath) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, (err, files) => {
      if (err)
        reject(err)
      else {
        resolve(files)
      }
    })
  })
}

const readFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {

      if (err) {
        reject(err)
      }
      let array = data.toString().split("\n");
      // for(i in array) {
      //     console.log(array[i]);
      // }
      //console.log(array.length)
      resolve(array)
    })
  })
}

// readFile("../seed/vegetables.txt")

module.exports = { readDir, readFile }