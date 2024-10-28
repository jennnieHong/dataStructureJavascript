import { LinkedList } from "./LinkedList.mjs";

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
 */

class Que {
	constructor() {
		this.list = new LinkedList();
	}
	push(data) {
		this.list.insertAt(0, data);
	}
	pop() {
		try {
			return this.list.deleteLast(); // O(n)성능
		} catch (e) {
			return null;
		}
	}
}

export { Que };
