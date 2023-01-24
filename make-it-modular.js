const mymodule = require('./mymodule.js')

const path = process.argv[2]

const extFile = process.argv[3];


mymodule(path,extFile, (err,data)=>{
    if(err) return console.log('callbackErr', err);

    data.forEach(files=>{
        console.log(files)
    })
})