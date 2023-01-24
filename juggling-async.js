const http = require('http');
const bl = require('bl')

let results = [];
let count = 0;


function printResult (){
    for(let i=0;i<3;i++){
        console.log(results[i])
    }
}

function httpGet (index){
    http.get(process.argv[2 + index], response=>{
        
        response.pipe(bl((err,data)=>{
            if(err) return console.log(err)
            
            results[index] = data.toString()
            count++

            if(count===3){
                printResult()
            }
        }))
        
    })
}

for(let i=0;i<3;i++){
    httpGet(i)
}


// First attempt.
// generates an error when returning a string with the message "undefined" concatenated together with the expected string.

/*
function printResult (){
    for(let i=0;i<3;i++){
        console.log(results[i])
    }
}

function httpGet (index){
    http.get(process.argv[2 + index], response=>{
        response.setEncoding('utf8');
        
        response.on('data',data=>{
            results[index] += data
        })

        response.on('end',()=>{
             count++
            if (count===3){
                printResult()
            }
        })
    })
}


for(let i=0;i<3;i++){
    httpGet(i)
}
*/
//////////////////////////////////////////

