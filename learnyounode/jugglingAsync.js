var tempString = '';
var data = [];
var http = require('http');
var count = 0;

function display() {
    for (var i = 0; i < data.length; i++)
        console.log(data[i]);
}

function getData(index) {
    http.get(process.argv[2 + i], function (response) {
        response.setEncoding('utf8');
        response.on('data', function (stringData) {
            tempString += stringData;
        });
        response.on('end', function () {
            data[index] = tempString;
            tempString = '';
            count++;
            if (count == 3)
                display();
        });
    });
}

for (var i = 0; i < 3; i++) {
    getData(i);
}