class List {
    constructor() {
        this.data = [];
    }
    find(value) {
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].value == value)
                return true;
        }
        return false;
    }
    push_front(item) {
        this.data.unshift(item);
        if (this.data.length != 0) {
            this.data[0].head = true;
            this.data[1].pLeft = this.data[0];

        }
    }
    pop_front() {
        this.data.shift();
        if (this.data.length != 0) {
            this.data[0].head = true;
            this.data[0].pLeft = null;
        }
    }
    push_back(item) {
        if (this.data.length == 0) {
            item.head = true;
            item.tail = true;
            this.data.push(item);
        } else {
            item.tail = true;
            item.pLeft = this.data[this.data.length - 1];
            this.data[this.data.length - 1].tail = false;
            this.data[this.data.length - 1].pRight = item;
            this.data.push(item);
        }

    }
    pop_back() {
        this.data.pop();
        if (this.data.length != 0) {
            this.data[this.data.length - 1].tail = true;
            this.data[this.data.length - 1].pRight = null;
        }
    }
    insert(item, index) {
        this.data.splice(index, 0, item);
    }
    getHeadIndex() {
        for (var i = 0; i < this.data.length; i++)
            if (this.data[i].head == true)
                return i;
    }
    getTailIndex() {
        for (var i = 0; i < this.data.length; i++)
            if (this.data[i].tail == true)
                return i;
    }
    getSize() {
        return this.data.length;
    }
    clear() {
        for (var i = 0; i < this.data.length; i++) {
            this.data.pop();
        }
    }

}

class Node {
    constructor(value = null) {
        this.head = null;
        this.tail = null;
        this.pLeft = null;
        this.pRight = null;
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
    console.log('\nHead Location: ');
    for (i = 0; i < list.data.length; i++) {
        if (list.data[i].head == true) {
            console.log('Node ' + i);
            break;
        }
    }
    console.log('\nTail Location: ');
    for (i = 0; i < list.data.length; i++) {
        if (list.data[i].tail == true) {
            console.log('Node ' + i);
            break;
        }
    }
}

function main() {
    var list = new List();
    for (var i = 0; i < 10; i++) {
        var newNode = new Node(Math.floor(Math.random() * 100) + 1);
        list.push_back(newNode);
    }
    display(list);
    list.pop_front();
    display(list);
}

main();