const htpp = require('http');

const url = process.argv[2]

htpp.get(url,response=>{
    let text = '';
    response.setEncoding('utf8');
    
    response.on('data',(data)=>{
        text += data;
    })
    response.on ('end',()=>{
        console.log(text.length)
        console.log(text)
    })
})