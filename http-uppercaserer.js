const http = require('http');
//const map = require('through2-map');
const port = process.argv[2];


const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type':'text/plain'});
    let responseData = ''; 
    if(req.method==='POST'){
        req.on('data',(chunk)=>{
            responseData += chunk;
        })
        req.on('end',()=>{
            res.end(responseData.toString().toUpperCase());
        })
    }
    
})
server.listen(port, ()=>{console.log('escuchando..')});