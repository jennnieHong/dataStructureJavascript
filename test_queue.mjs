import { Queue } from "./Queue.mjs";

let list = new Queue();

list.enqueue(1);
list.enqueue(2);
list.enqueue(3);
list.enqueue(4);
list.enqueue(5);

console.log(list.dequeue());
console.log(list);

console.log(list.dequeue());
console.log(list.dequeue());
console.log(list.dequeue());
console.log(list);
console.log(list.dequeue());
console.log(list);
console.log(list.dequeue());

console.log(list.isEmpty());
list.enqueue(6);
list.enqueue(7);
console.log(list.front());
