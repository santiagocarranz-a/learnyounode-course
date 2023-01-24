const http = require('http');
const port = process.argv[2];

function parseTime (time){
    return{
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
    }
}

function unixTime (time){
    return{
        unixtime: time.getTime()
    }
}

const routes = {
    '/api/parsetime':(parsedUrl)=>{
        const time = new Date(parsedUrl.searchParams.get('iso'));
        return parseTime(time)
    },
    '/api/unixtime':(parsedUrl)=>{
        const time = new Date(parsedUrl.searchParams.get('iso'));
        return unixTime(time)
    }
}

const server = http.createServer((req,res)=>{
    const parsedUrl = new URL(req.url,`http://localhost:${port}`);
    const route = routes[parsedUrl.pathname];
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(route(parsedUrl)));
})

server.listen(port);

