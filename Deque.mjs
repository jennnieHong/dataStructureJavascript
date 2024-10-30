import { DoublyLinkedList } from "./DoublyLinkedList.mjs";
/**
 * 덱의 추상자료형
 *
 * printAll
 * addFirst - 데이터 해드에 데이터 삽입
 * addLast - 데이터 테일에 데이터 삽입
 * removeFirst - 데이터 해드 데이터 제거
 * removeLast - 데이터 테일 데이터 제거
 * isEmpty
 *
 *
 * 덱은 삽입과 제거를 head, tail 두 군데서 자유롭게 함. so 덱으로 스택 큐를 자유롭게 구현 가능함. addFirst + removeFirst -> Stack 또는 addLast + removeLast -> Stack / addFirst + removeLast -> Queue 또는 addLast + removeFirst -> Queue
 *
 */
class Deque {
    constructor() {
        this.list = new DoublyLinkedList();
    }

    printAll() {
        this.list.printAll();
    }

    addFirst(data) {
        this.list.insertAt(0, data); //O(1)성능
    }

    addLast(data) {
        this.list.insertAt(this.list.count, data);
    }

    removeFirst() {
        return this.list.deleteAt(0); //O(1)성능
    }
    removeLast() {
        return this.list.deleteLast();
    }
    isEmpty() {
        return this.list.count === 0;
    }
}

export { Deque };
