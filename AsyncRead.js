const { readAfile, readDirectory } = require("./FileUtils");
var path = require('path');

// Read all files and display the output as an object with file name as key and the contents as array of strings
//readDirectory and readAFile return promises. That's why we do await
async function display(dirName) {
  const fileNames = await readDirectory(dirName);
  var obj = {}
  const fileData = fileNames.map(async (fileNames) => {
    const name = path.parse(fileNames).name;    //extracts only name of file. Eliminates extension
    const content = await readAfile(`./seed/${fileNames}`);
    return content
  });
  

  //Promise.all returns a promise. That's why await
  const allPromise = await Promise.all(fileData);
  return allPromise;
}

display("./seed").then(console.log);
