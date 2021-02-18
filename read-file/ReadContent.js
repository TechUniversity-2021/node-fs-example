const fs=require("fs")
const path = require('path');
const { compileFunction } = require("vm");

const {getData,getDirectoryFiles}=require("../file-utils/FileUtils")

async function readContent(dirName){
  
    const fileNames=await getDirectoryFiles(dirName)
    //console.log(fileNames)
    const fileData=fileNames.map(async (fileName)=>{

        const name=path.parse(fileName).name;
       //console.log(fileName)
        //console.log(name)

        const content=await getData(`${dirName}/${fileName}`)
        return content;
        //console.log("i am  here")

        //result[name]=content;

     

    })
    const allPromises=await Promise.all(fileData)

    //console.log(allPromise)
    //console.log(fileData)
    //console.log("hii")
return allPromises;

}

readContent("seed").then(console.log)



/*
const fs = require("fs")
const path = require('path');
function readFiles(directory) {
    return new Promise((resolve, reject) => {
        fs.readdir(directory, (err, fileNames) => {
            var result = {}
            if (!err) {
                fileNames.forEach(fileName => {

                    const name = path.parse(fileName).name;

                    fs.readFile("./seed/" + fileName, function read(err, data) {
                        if (err) {
                            throw err;
                        }
                        //console.log(name, data)
                        result[name] = data
                    });
                })
                resolve(result);

            }
            else {
                reject(err)
            }
        })
    })
}

console.log(readFiles("./seed").then(console.log))
*/

