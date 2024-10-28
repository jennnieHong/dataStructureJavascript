import { Node, LinkedList } from "./LinkedList.mjs";

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
node1.next = node2;
node2.next = node3;
// console.log(node1.next.next);
// console.log(node2.next.data);
// console.log(node3.next);

let list = new LinkedList();
console.log("======== insertAt() 다섯 번 호출 ========");
list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);
// console.log("1", list);
// console.log("2", list.head);
// console.log("3", list.head.next);
// console.log("4", list.head.next.next);
// console.log("5", list.head.next.next.next);
// console.log(list.head.data);

list.printAll();

list.insertLast(10);
list.printAll();
console.log(list.deleteAt(0));
list.printAll();
console.log(list.deleteLast());
list.printAll();
console.log(list.deleteLast());
list.printAll();

console.log("getNode0", list.getNode(0));
console.log("getNode1", list.getNode(1));
console.log("getNode2", list.getNode(2));
