function display() {
    var fs = require('fs');
    fs.readFile(process.argv[2], function doneReading(err, fileContents) {
        fileContents = fileContents.toString();
        var data = fileContents.split('\n');
        console.log(data.length - 1);
    });
}

display();