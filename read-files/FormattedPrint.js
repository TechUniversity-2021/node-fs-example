const readFileByFile = require('./ReadDirectoryFiles.js');

(async function () {
    const content = await readFileByFile.readFileByFile()
    for (let index = 0; index < content.length; index++) {
        console.log(`${Object.keys(content[index])[0].split('.')[0]}: `, content[index][Object.keys(content[index])])
    }
})()