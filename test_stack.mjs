import { Stack } from "./Stack.mjs";

let list = new Stack();

list.push(0);
console.log(list.pop());
list.push(1);
list.push(2);
console.log(list.peek());
list.push(3);
console.log(list.peek());
console.log(list.pop());
console.log(list.pop());
console.log("isEmpty1", list.isEmpty());

console.log(list.pop());
console.log("isEmpty2", list.isEmpty());
