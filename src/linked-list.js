const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);

        if (this.length != 0) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        for (var i = 0, elem = this._head; i < index; i++, elem = elem.next);
        return elem.data;
    }

    insertAt(index, data) {
        if (this.length != 0) {
            for (var i = 0, elem = this._head; i < index - 1; i++, elem = elem.next);
            var node = new Node(data);
            var nextElem = elem.next;
            elem.next = node;
            nextElem.prev = node;
            node.prev = elem;
            node.next = nextElem;
            this.length += 1;
        }
        return this;
    }

    isEmpty() {
        return this.length == 0;
    }

    clear() {
        if (this.length != 0) {
            this._head.next = null;
            this._head.data = null;
            this._tail.prev = null;
            this._tail.data = null;
            this.length = 0;
        }
        return this;
    }

    deleteAt(index) {
        if (index == 0) {
            this._head = this._head.next;
        }
        else {
            for (var i = 0, elem = this._head; i < index; i++, elem = elem.next);
            var previousList = elem.prev;
            var nextList = elem.next;
            previousList.next = nextList;
        }
        this.length--;
        return this;
    }

    reverse() {
        for (var i = 0, elemHead = this._head, elemTail = this._tail; i < this.length / 2; i++, elemHead = elemHead.next, elemTail = elemTail.prev) {
            var temp = elemHead.data;
            elemHead.data = elemTail.data;
            elemTail.data = temp;
        }
        return this;
    }

    indexOf(data) {
        for (var i = 0, elem = this._head; i < this.length; i++, elem = elem.next) {
            if (elem.data == data) {
                return i;
            }
        }
        return -1;
    }
}

module.exports = LinkedList;
