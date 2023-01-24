const fs = require ('fs')

const path = process.argv[2]

const extFile = process.argv[3];

fs.readdir(path, (err, files)=>{
    if(err) return console.log(err)

    files.forEach(file =>{
        file.split('.')[1]===extFile? console.log(file) : null;
    })
})

