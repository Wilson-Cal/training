function main() {
    var fs = require('fs');
    fs.readdir(process.argv[2], function (err, list) {
        var newList = list.filter(function (currentValue) {
            if (currentValue.includes('.md'))
                return currentValue;
        });
        for (var i = 0; i < newList.length; i++)
            console.log(newList[i]);
    });
}

main();