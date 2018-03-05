var fs = require('fs');
var fileContents = fs.readFileSync(process.argv[2]).toString();
var data = fileContents.split('\n');
console.log(data.length - 1);