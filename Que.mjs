import { LinkedList } from "./LinkedList.mjs";

/**
 * 큐(FIFO)의 추상자료형
 *
 * push() 삽입은 head로
 * pop() 삭제는 라스트인덱스로
 *
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
			return this.list.deleteLast();
		} catch (e) {
			return null;
		}
	}
}

export { Que };
