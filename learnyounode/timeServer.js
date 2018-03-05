var net = require('net');
var date = new Date();

var server = net.createServer(function (socket) {
    // socket handling logic
    var stringData = date.getFullYear() + '-0' + (date.getMonth() + 1) + '-0' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + '\n';
    socket.end(stringData);
});

server.listen(process.argv[2]);