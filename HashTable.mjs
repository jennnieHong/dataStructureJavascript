/**
 * 해시테이블
 * 자료구조
 *
 * 프로그래밍 언어에 따라 여러 이름으로 부름 : 해시, 맵, 해시맵, 딕셔너리
 * 해시로 변환한 값을 key로 값을 value로 넣어 단순 인덱스보다 낭비없이 데이터를 관리하고, key만 알면 O(1)성능으로 읽기, 쓰기, 수정, 삭제 다 가능 <장점>
 * 미리 많은 공간을 마련해야 함 , 해시함수에 따라 공간 낭비가 클수도 작을수도 있음 <단점>
 * 해시 변환 값이 중복되는 문제를 방지하기 위해 동일인덱스에 들어오는 값을 연결리스트로 구성하는데, 해당 인덱스에 여러 노드가 저장되는 경우 노드로 들어가서 동일 값이 나올때까지 순차적으로 돔. 이 경우 O(n) 성능
 * so, 해시테이블은 해시함수의 선정이 중요함. 데이터를 골고루 분배시키는 해시함수가 좋은 것.
 *
 * 해시테이블의 추상자료형
 *
 * set - 해시테이블에 데이터 삽입
 * get - 데이터 읽기
 * remove - 해당 키의 value 제거
 *
 *
 */
import { DoublyLinkedList } from "./DoublyLinkedList.mjs";

class HashData {
    constructor(key, value) {
        //초기화할 속성정의
        this.key = key;
        this.value = value;
    }
}

class HashTable {
    constructor() {
        //0-9 각배열 원소를 빈 연결리스트로 초기화
        this.arr = [];
        for (let i = 0; i < 10; i++) {
            this.arr[i] = new DoublyLinkedList();
        }
    }
    hashFunction(number) {
        return number % 10;
    }
    set(key, value) {
        this.arr[this.hashFunction(key)].insertAt(0, new HashData(key, value));
    }
    get(key) {
        let currentNode = this.arr[this.hashFunction(key)].head; //해당 인덱스값: this.hashFunction(key) .head 첫 노드..
        while (currentNode != null) {
            //리스트의 끝이 널일 때 까지 반복
            this.arr[this.hashFunction(key)];
        }
    }
}
