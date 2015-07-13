var net =require('net');
var strftime= require('strftime');

var server = net.createServer(function (socket){
    data=strftime('%Y-%m-%d %H:%M')+"\n";
    socket.write(data);
    socket.end();
});

server.listen(process.argv[2]);