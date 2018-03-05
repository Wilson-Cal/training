var stringData = '';
var callback = function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
        stringData += data;
    });
    response.on('end', function () {
        console.log(stringData);
    });
};
var http = require('http');
http.get(process.argv[2], callback);