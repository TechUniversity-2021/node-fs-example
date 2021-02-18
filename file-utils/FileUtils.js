const { rejects } = require("assert")
const fs=require("fs")

function getDirectoryFiles(dirName){
    return new Promise((resolve,reject)=>{
        fs.readdir(dirName,(err,fileNames)=>{
            if(err){
                reject(err)

            }
            else{
                resolve(fileNames)
            }

        })
    })

}

function getData(fileName){
    return new Promise((resolve,reject)=>{
    fs.readFile(fileName,"utf-8",(err,data)=>{
        if(err){
            reject(err)

        }
        else{
            resolve(data)
        }
    })
})
}
console.log(getData("seed/fruits.txt").then(console.log))
console.log(getDirectoryFiles("seed").then(console.log))

module.exports={getData,getDirectoryFiles}
