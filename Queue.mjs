import { LinkedList } from "./LinkedList.mjs";
import { DoublyLinkedList } from "./DoublyLinkedList.mjs";
/**
 * 큐(FIFO)의 추상자료형
 *
 * (X) push() 삽입은 head로
 * (X) pop() 삭제는 라스트인덱스로
 * enqueue - 데이터 삽입
 * dequeue - 데이터 제거
 * front - tail의 데이터 (가장 먼저들어간 데이터) 참조
 * (x) end - head의 데이터 (가장 마지막에 들어간 데이터) 참조
 * isEmpty - 비었는지 확인
 *
 * * 삽입은 head, 삭제는 tail에서 이루어짐. ✍️새로운거 들어오면 head를 마지막에 들어온거로 지정을 함. tail은 가장 먼저 들어온게 됨❗❗
 *
 */

class Queue {
    constructor() {
        this.list = new DoublyLinkedList();
    }
    // push(data) {
    //     this.list.insertAt(0, data);
    // }
    // pop() {
    //     try {
    //         return this.list.deleteLast(); // 한방향 링크드리스트로 마지막 노드 제거시 O(n)성능을 내기 때문에 O(1)성능을 내려면 양방향 링크드리스트로 변경해야 함
    //     } catch (e) {
    //         return null;
    //     }
    // }
    enqueue(data) {
        this.list.insertAt(0, data); //queue역시 먼저 들어가는 부분은 그대로 두고 마지막에 넣는것은 앞쪽에 추가함. 먼저 들어간 게 tail이고 가장 앞에 붙는게 head임. 먼저들어간게 head고 마지막에 들어간게 tail일거같은건 단방향
    }
    dequeue() {
        try {
            return this.list.deleteLast();
        } catch (e) {
            return null;
        }
    }
    front() {
        return this.list.tail;
    }
    isEmpty() {
        return this.list.count === 0;
    }
}

export { Queue };
