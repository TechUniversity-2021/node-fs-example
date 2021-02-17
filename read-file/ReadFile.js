const promisifyfs = require('../promisify-contents/PromisifyFileDirectory')


fileWithContents = async () => {
    let fileNames = await  promisifyfs.readDir("../seed");
    let resultObject = {}
    for (let i = 0; i < fileNames.length; i++) {
        let fileContent = await promisifyfs.readFile("../seed/" + fileNames[i]);
        resultObject[trimFileName(fileNames[i])] = fileContent;
    }
   
    return resultObject;
}

trimFileName = (name) => {
    //remove .txt part
    let length = name.split('').length;
    let key = name.slice(0, length - 4);
    return key;
}

// fileWithContents().then(console.log)
module.exports = {fileWithContents, trimFileName }