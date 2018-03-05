class List {
    constructor() {
        this.data = [];
    }
}

class Node {
    constructor(pLeft = null, pRight = null, value = null) {
        this.pLeft = pLeft;
        this.pRight = pRight;
        this.value = value;
    }
}

function display(list) {
    console.log('Values:');
    for (var i = 0; i < list.data.length; i++) {
        console.log('Node ' + i + ' Value: ' + list.data[i].value);
    }
    console.log('\npLeft:');
    for (i = 0; i < list.data.length; i++) {
        if (i != list.data.length - list.data.length)
            console.log('Node ' + i + ' pLeft Value: ' + list.data[i].pLeft.value);
        else
            console.log('Node ' + i + ' pLeft Value: ' + list.data[i].pLeft);
    }
    console.log('\npRight');
    for (i = 0; i < list.data.length; i++) {
        if (i != list.data.length - 1)
            console.log('Node ' + i + ' pRight Value: ' + list.data[i].pRight.value);
        else
            console.log('Node ' + i + ' pRight Value: ' + list.data[i].pRight);
    }
    console.log('\nDouble Jump');
    console.log('Node ' + 0 + ' pRight\'s pRight Value: ' + list.data[0].pRight.pRight.value);
}

function main() {
    var list = new List();
    for (var i = 0; i < 10; i++) {
        if (i == list.data.length - list.data.length || list.data.length == 0) {
            var newNode = new Node(null, null, Math.floor(Math.random() * 100) + 1);
            list.data.push(newNode);
        } else {
            var newNode2 = new Node(list.data[i - 1], null, Math.floor(Math.random() * 100) + 1);
            list.data.push(newNode2);
            list.data[i - 1].pRight = list.data[i];
        }
    }
    display(list);
}

main();