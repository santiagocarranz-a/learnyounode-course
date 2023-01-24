const fs = require('fs')

const file = process.argv[2]


function readFileSync () {
    fs.readFile(file,'utf-8',(error,data)=>{
        if(error){
            return console.log(error)
        }else{
            const lines= data.split('\n').length - 1
            console.log(lines)
        }
    })
}

readFileSync()