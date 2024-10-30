import { Deque } from "./Deque.mjs";

let deque = new Deque();
deque.addFirst(1);
console.log(deque.isEmpty());
deque.addFirst(2);
deque.addLast(3);
deque.printAll();
deque.removeLast();
deque.printAll();
deque.removeFirst();
deque.printAll();
deque.removeFirst();
deque.printAll();
console.log(deque.isEmpty());
