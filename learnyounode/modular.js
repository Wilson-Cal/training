var dir = process.argv[2];
var filter = process.argv[3];
var mymodule = require('./myModule.js');

var callback = function (err, list) {
    if (err) throw err;
    list.forEach(function (currentValue) {
        console.log(currentValue);
    });
};

mymodule(dir, filter, callback);