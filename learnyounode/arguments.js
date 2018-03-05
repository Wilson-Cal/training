//console.log(process.argv);

function getNumData(rawData) {
    var numData = [];
    for (var i = 2; i < rawData.length; i++) {
        numData.push(Number(rawData[i]));
    }
    return numData;
}

function getTotal(numData) {
    return numData.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    });
}

function display(total) {
    console.log(total);
}

function main() {
    var rawData = process.argv;
    var numData = getNumData(rawData);
    var total = getTotal(numData);
    display(total);
}

main();