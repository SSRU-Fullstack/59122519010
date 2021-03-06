
/*
In the node.js intro tutorial (http://nodejs.org/), they show a basic tcp 
server, but for some reason omit a client connecting to it.  I added an 
example at the bottom.
Save the following server in example.js:
*/

var net = require('net'); 

var server = net.createServer(socket => {
	socket.write('Echo server\r\n');
    // socket.pipe(socket); //send to client
    socket.on(`data`, res => {
        let text = res.toString(`utf8`)
        console.log(`Response: ${text}`)
    })
});

server.listen(1337, '127.0.0.1'); // [port, ip] start server


