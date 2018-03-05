var http = require('http');
var url = require('url');

function createTimeJSON(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };
}

function createTimeUNIXJSON(time) {
    return {
        unixtime: time.getTime()
    };
}

var server = http.createServer(function (req, res) {
    var parsedURL = url.parse(req.url, true);
    var time = new Date(parsedURL.query.iso);
    var result = false;

    if (/^\/api\/parsetime/.test(req.url))
        result = createTimeJSON(time);
    else if (/^\/api\/unixtime/.test(req.url))
        result = createTimeUNIXJSON(time);
    if (result) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(process.argv[2]);