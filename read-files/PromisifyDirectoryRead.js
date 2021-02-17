const fs = require('fs')
const promisifyDirectory = (dirPath) => {
    return new Promise((resolve,reject) => {
        fs.readdir(dirPath,'utf-8',(err,data) => {
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })

}

module.exports = {promisifyDirectory}