var fs = require('fs');
var path = require('path');

module.exports = function (dirName, fileExtension, callback) {
    fs.readdir(dirName, function (err, list) {
        if (err) return callback(err);
        else {
            var newList = list.filter(function (currentValue) {
                return path.extname(currentValue) === '.' + fileExtension;
            });
            return callback(null, newList);
        }
    });
};