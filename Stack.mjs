/**
 * 스택(FILO, LIFO) 의 추상자료형
 * push - (탑)데이터 삽입
 * pop - (탑)데이터 제거
 * peek - (탑)데이터 참조
 * isEmpty - 비었는지 체크
 *
 ** 연결리스트를 이용한 스택 구현
 */

import { LinkedList } from "./LinkedList.mjs";

class Stack {
	constructor() {
		this.list = new LinkedList(); //초기화 시 빈 리스트 생성
		// this.head = null;
		// this.count = 0;
	}
	push(data) {
		this.list.insertAt(0, data);
	}
	pop() {
		try {
			//빈리스트인 경우 기존의 연결리스트의 예외처리를 받아서 null 리턴
			return this.list.deleteAt(0);
		} catch {
			//(e)를 안써도 작동은 하는군..
			return null;
		}
	}

	peek() {
		try {
			return this.list.getNode(0); //리턴하지 않으면 undefined가 나옴
		} catch (e) {
			return null;
		}
	}
	isEmpty() {
		if (this.list.count == 0) {
			return true;
		} else {
			return false;
		}
	}
}

export { Stack };
