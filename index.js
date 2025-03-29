import HashMap from "./hashmaps.js";
import LinkedList from "./linkedlist.js";

const divContent = document.getElementById("content");
divContent.innerText = "Javascript basic algorithms.";

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

const linkedList = new LinkedList();
linkedList.append(2);
linkedList.append(4);
linkedList.prepend(42);
linkedList.append(6);
linkedList.removeAt(2);
console.log(linkedList.toString());
