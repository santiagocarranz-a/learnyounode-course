const net = require ('net')
const strftime = require ('strftime')

const port = process.argv[2] 


const server = net.createServer(socket=>{
    const newDate = new Date();
    const strftimeDate = strftime('%Y-%m-%d %H:%M',newDate);

    socket.write(strftimeDate + "\n");
    socket.end();
})

server.listen(port);

