const fs = require ('fs')

function printListDirectoryFiles (path, extFile, callback){

    fs.readdir(path, 'utf8', (err,data)=>{
        if(err) return callback(err);

        const fileResult = []
        data.forEach(file=>{
            file.split('.')[1]===extFile? fileResult.push(file) : null;
        })
        return callback (null,fileResult)
    })
}

module.exports = printListDirectoryFiles;