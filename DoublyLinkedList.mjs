class Node {
	constructor(data, next = null, prev = null) {
		this.data = data;
		this.next = next;
		this.prev = prev;
	}
}
/**
 * 연결리스트의 추상자료형 (*추상자료형 : 클래스와 내부 함수로 표현된 관련 연산기능들)
 * 1. 모든 데이터 출력
 * 2. 모든 데이터 제거
 * 3. 인덱스 삽입
 * 4. 마지막 삽입
 * 5. 인덱스 삭제
 * 6. 마지막 삭제
 * 7. 인덱스 읽기
 *
 * *특정 인덱스 요소까지 가기 위해서는 앞에서부터만 접근이 가능함. 다음 노드가 어딘지를 통해서 연결이 되어있으니까. O(n)성능이 나옴. so O(1)의 성능을 내기 위해 양방향리스트필요
 */
//
//클래스 선언
class DoublyLinkedList {
	//연결리스트에서 필요한 연산들
	//생성자
	constructor() {
		this.head = null; //연결리스트의 시작노드
		this.tail = null; //
		this.count = 0; //총 저장된 노드의 수
	}
	//함수의 원형- 원하는 인덱스에 데이터 삽입하는 함수
	insertAt(index, data) {
		//삽입할 위치, 삽입할 데이터
		if (index > this.count || index < 0) {
			//예외처리
			throw new Error("범위를 벗어남");
		}
		let newNode = new Node(data); //삽입할 노드를 생성. 삽입할 데이터 생성자로 넘겨서 노드의 데이터를 설정해줌
		if (index == 0) {
			//case1. 맨 앞에 삽입하는 경우
			newNode.next = this.head;
			this.tail = newNode.next;
			this.head = newNode;
		} else {
			//case2. 그 외에 삽입하는 경우
			let currentNode = this.head; //삽입하려는 노드 직전까지 가기위한 노드
			for (let i = 0; i < index - 1; i++) {
				currentNode = currentNode.next;
			}
			newNode.next = currentNode.next;
			currentNode.next = newNode;
		}
		this.count++;
	}
	// 리스트의 모든 요소를 출력하는 함수
	printAll() {
		let currentNode = this.head;
		let text = "[";
		while (currentNode != null) {
			text += currentNode.data;
			currentNode = currentNode.next; //currentNode = this.head.next; 이렇게 하면 무한루프가 걸림. 첫 노드의 다음노드로 변하지 않으니까.
			if (currentNode != null) {
				text += ",";
			}
		}
		text += "]";
		console.log(text);
	}
	// 리스트의 모든 요소를 제거하는 함수
	clear() {
		this.head = null;
		this.count = 0;
	}
	//마지막 인덱스에 노드 추가하는 함수
	insertLast2(data) {
		let newNode = new Node();
		newNode.data = data;
		let currentNode = this.head;
		for (let i = 0; i < this.count - 1; i++) {
			currentNode = currentNode.next;
		}
		currentNode.next = newNode;

		this.count++;
	}
	insertLast(data) {
		this.insertAt(this.count, data);
	}
	// 특정 인덱스의 노드를 삭제
	deleteAt2(index) {
		if (index >= this.count || index < 0) {
			//제거인 경우 카운트 범위 내의 개수보다 하나 적은 것까지가 인덱스 범위임.
			throw new Error("범위 벗어남");
		}
		let currentNode = this.head;
		if (index === 0) {
			//첫번째 노드를 제거하는 상황
			this.head = currentNode.next; //여기서는 this.head = this.head.next;로 해도 됨 무슨차이지?
		} else {
			//그외의 노드를 제거하는 상황
			for (let i = 0; i < index - 1; i++) {
				currentNode = currentNode.next;
			}
			currentNode.next = currentNode?.next.next || null;
		}
		this.count--;
	}
	// 특정 인덱스의 노드를 삭제하고, 삭제하는 노드를 리턴함
	deleteAt(index) {
		if (index >= this.count || index < 0) {
			//제거인 경우 카운트 범위 내의 개수보다 하나 적은 것까지가 인덱스 범위임.
			throw new Error("범위 벗어남");
		}
		let currentNode = this.head;
		if (index === 0) {
			let deleteNode = this.head;
			this.head = this.head.next;
			this.count--;
			return deleteNode;
		} else {
			for (let i = 0; i < index - 1; i++) {
				currentNode = currentNode.next;
			}
			let deleteNode = currentNode.next;
			currentNode.next = currentNode.next.next;
			this.count--;
			return deleteNode;
		}
	}
	// 마지막 노드를 삭제하는 함수
	deleteLast() {
		return this.deleteAt(this.count - 1); //단순히 호출이 아니라 return까지 해주면 리턴받은 값 그대로 리턴함.
	}
	// 해당 인덱스의 노드를 읽는 함수
	getNode2(index) {
		if (index > this.count - 1 || index < 0) {
			throw new Error("올바른 범위 아님");
		}
		let currentNode = this.head;
		if (index === 0) {
			//여기는 분기처리를 할 필요가 없음
			return this.head;
		}
		for (let i = 0; i < index - 1; i++) {
			//이렇게 하면 이전노드까지인거고
			currentNode = currentNode.next;
		}
		return currentNode.next;
	}
	getNode(index) {
		if (index > this.count - 1 || index < 0) {
			throw new Error("올바른 범위 아님");
		}
		let currentNode = this.head;
		for (let i = 0; i < index; i++) {
			//이렇게 하면 해당 노드까지인거임
			currentNode = currentNode.next;
		}
		return currentNode;
	}
}
export { Node, DoublyLinkedList };
