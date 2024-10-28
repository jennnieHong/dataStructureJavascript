import { Que } from "./Que.mjs";

let list = new Que();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

console.log(list.pop());
console.log(list);

console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list);
console.log(list.pop());
console.log(list);
console.log(list.pop());
