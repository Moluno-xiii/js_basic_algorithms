const divContent = document.getElementById("content");
divContent.innerText = "HashMaps";
console.log("Hash Maps");

// Key is only of type string.

class HashMap {
  constructor(loadFactor, capacity) {
    this._loadFactor = loadFactor;
    this._capacity = capacity;
    this._bucket = new Array(capacity).fill(null);
    this._size = 0;
  }

  loadFactor() {
    return this._loadFactor * this._capacity;
  }

  capacity() {
    return this._capacity;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this._capacity;
    }

    return hashCode;
  }

  set(key, value) {
    this.checkIfLoadFactorIsExceeded();
    const index = this.hash(key);

    if (!this._bucket[index]) {
      this._bucket[index] = [];
    }

    const subArray = this._bucket[index];

    for (let i = 0; i < subArray.length; i++) {
      if (subArray[i].key === key) {
        subArray[i].value = String(value);
        return;
      }
    }

    subArray.push({ key, value });
    this._size += 1;
  }

  get(key) {
    const index = this.hash(key);

    if (index < 0 || index >= this._bucket.length) {
      throw new Error("Trying to access index out of bounds");
    }
    if (!this._bucket[index]) return null;

    const subArray = this._bucket[index];
    for (let i = 0; i < subArray.length; i++) {
      if (subArray[i].key === key) {
        return subArray[i].value;
      }
    }

    return null;
  }

  has(key) {
    const index = this.hash(key);
    if (!this._bucket[index]) return false;

    const subArray = this._bucket[index];
    for (let i = 0; i < subArray.length; i++) {
      if (subArray[i].key === key) {
        return true;
      }
    }

    return false;
  }

  remove(key) {
    const index = this.hash(key);

    if (!this._bucket[index]) return false;

    const subArray = this._bucket[index];

    for (let i = 0; i < subArray.length; i++) {
      if (subArray[i].key === key) {
        subArray.splice(i, 1);
        this._size--;
        return true;
      }
    }

    return false;
  }

  length() {
    return this._size;
  }

  clear() {
    this._bucket = new Array(this._capacity).fill(null);
    this._size = 0;
  }

  keys() {
    const returnedArray = [];

    for (let i = 0; i < this._bucket.length; i++) {
      if (this._bucket[i]) {
        this._bucket[i].forEach((property) => {
          returnedArray.push(property.key);
        });
      }
    }

    return returnedArray;
  }

  values() {
    const returnedArray = [];

    for (let i = 0; i < this._bucket.length; i++) {
      if (this._bucket[i]) {
        this._bucket[i].forEach((property) => {
          returnedArray.push(property.value);
        });
      }
    }

    return returnedArray;
  }

  entries() {
    const returnedArray = [];

    for (let i = 0; i < this._bucket.length; i++) {
      if (this._bucket[i]) {
        this._bucket[i].forEach((property) => {
          returnedArray.push([property.key, property.value]);
        });
      }
    }

    return returnedArray;
  }

  checkIfLoadFactorIsExceeded() {
    if (this._size >= this.loadFactor()) {
      this.resize();
    }
  }

  resize() {
    this._capacity *= 2;
    const oldBuckets = this._bucket;
    this._bucket = new Array(this._capacity).fill(null);
    this._size = 0;

    for (const bucket of oldBuckets) {
      if (bucket) {
        for (const { key, value } of bucket) {
          this.set(key, value);
        }
      }
    }
  }
}

const test = new HashMap(0.8, 40);
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
console.log(test);
console.log(test.get("apple"));
console.log(test.has("kite"));
test.remove("frog");
console.log(test.has("frog"));
console.log(test.length());
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
test.clear();
console.log(test);
