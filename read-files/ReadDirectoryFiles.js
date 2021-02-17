const fileOps = require('./PromisifyFileRead')
const dirOps = require('./PromisifyDirectoryRead')

async function readDirFiles() { 
    const dirContent = await dirOps.promisifyDirectory('../seed')
    return dirContent;
}

async function readFileByFile() { 
    const dirFileNames = await readDirFiles()
    return await Promise.all(dirFileNames.map(async (data) => {
        let dict = {}
        dict[data] = (await fileOps.promisifyFs(`../seed/${data}`)).split('\n')
        return dict
    }))
}

// (async function () {
//     const content = await readFileByFile()
//     console.log(content)
// })()
// readOneFile(dirValue[0]).then(console.log)
//promisifyDirectory('../seed').then((data) => console.log(data[0]))

module.exports = { readDirFiles, readFileByFile}