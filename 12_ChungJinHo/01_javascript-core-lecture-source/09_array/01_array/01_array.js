/* 배열 생성 */

// 1. 배열 리터럴([])을 이용한 생성 (권장)
const arr = ['바나나', '복숭아', '키위'];
console.log(arr);

// const로 선언된 배열은 재할당이 불가능하지만, 요소의 변경은 가능합니다.
// arr = []; // 에러 발생
// arr[0] = '딸기'; // 가능

// 2. 배열 생성자 함수를 이용한 생성
const arr2 = new Array();
console.log('arr2 :', arr2);

// 배열의 길이를 지정한 상태로 생성
const arr3 = new Array(10);
console.log('arr3 :', arr3);

const arr4 = new Array(1, 2, 3);
console.log('arr4 :', arr4);


// 3. Array.of() 메서드
console.log(Array.of(10));
console.log(Array.of(1, 2, 3));
console.log(Array.of('hello', 123, {name: '홍길동'}, true));

/* 배열은 인덱스를 이용해서 요소 접근 가능 */
console.log('arr :', arr);
console.log('arr[0] :', arr[0]);
console.log('arr[1] :', arr[1]);
console.log('arr[2] :', arr[2]);

// 원하는 인덱스가 존재하지 않아도 요소 추가 가능
arr[3] = '딸기';
console.log('arr[3] :', arr[3]);

// 인덱스를 중간에 건너뛰게 되면 중간 부분은 empty(비어있음)가 됩니다.
arr[5] = '멜론';
console.log('arr :', arr);


/* length : 배열의 길이를 반환 */
console.log(arr.length);

/* for 문 이용 가능 */
for (let i = 0; i < arr.length; i++) {
  console.log(`arr[${i}] : ${arr[i]}`);
}


/* 배열의 타입 확인 */
console.log(typeof arr); // object