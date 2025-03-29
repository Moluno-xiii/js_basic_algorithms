class LinkedList {
  constructor() {
    this._size = 0;
    this._head = null;
  }

  size() {
    return this._size;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this._head) {
      this._head = newNode;
    } else {
      let current = this._head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }

    this._size += 1;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this._head) {
      this._head = newNode;
    } else {
      newNode.nextNode = this._head;
      this._head = newNode;
    }
    this._size += 1;
  }

  head() {
    return this._head ? this._head : null;
  }

  tail() {
    if (!this._head) return null;

    let current = this._head;
    while (current.nextNode) {
      current = current.nextNode;
    }

    return current;
  }

  at(index) {
    if (!this._head) return null;
    let current = this._head;

    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
  }

  pop() {
    if (!this._head) throw new Error("List is empty.");

    if (!this._head.nextNode) {
      this._size = 0;
      this._head = null;
      return;
    }

    let current = this._head;

    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }

    current.nextNode = null;
    this._size -= 1;
  }

  contains(value) {
    if (!this._head) throw new Error("List is empty.");

    let current = this._head;

    while (current) {
      if (current.value === value) {
        return true;
      } else {
        current = current.nextNode;
      }
    }

    return false;
  }

  find(value) {
    if (!this._head) return null;
    let current = this._head;
    let index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      } else {
        current = current.nextNode;
        index++;
      }
    }
    return null;
  }

  toString() {
    if (!this._head) {
      return "null";
    }

    let result = "";
    let current = this._head;

    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    result += "null";

    return result;
  }

  insertAt(value, index) {
    if (this._size <= index || index < 0) throw new Error("Invalid index.");

    if (index === 0) {
      const newNode = new Node(value);
      newNode.nextNode = this._head;
      this._head = newNode;
      this._size += 1;
      return;
    }

    let current = this._head;

    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }

    const newNode = new Node(value);
    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
    this._size += 1;
  }

  removeAt(index) {
    if (this._size <= index || index < 0) throw new Error("Invalid index.");

    if (index === 0) {
      this._head = this._head.nextNode;
      this._size -= 1;
      return;
    }

    let current = this._head;

    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }

    current.nextNode = current.nextNode.nextNode;
    this._size -= 1;
  }
}

class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

const linkedList = new LinkedList();
linkedList.append(2);
linkedList.append(4);
linkedList.prepend(42);
linkedList.append(6);
linkedList.removeAt(2);
console.log(linkedList.toString());

const divContent = document.getElementById("content");
divContent.textContent = "Linked Lists";
