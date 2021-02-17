const fs= require("fs");

function promisifyFs(filePath){
    return new Promise(function(resolve,reject){
        fs.readFile(filePath,'utf-8',function(err,data){
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })

}

module.exports={
    promisifyFs
};