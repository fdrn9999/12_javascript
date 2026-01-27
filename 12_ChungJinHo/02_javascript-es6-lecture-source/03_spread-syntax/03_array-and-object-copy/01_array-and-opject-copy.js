/* 01_array-and-object-copy */

/**
 * 전개 문법(Spread Syntax)을 이용한 배열/객체 복사
 * - 기본적으로 '얕은 복사(Shallow Copy)'이지만, 1단계 깊이의 요소들은 새로운 메모리에 복사됩니다.
 * - 따라서 내부 요소가 원시값(Primitive)인 경우, 마치 깊은 복사(Deep Copy)된 것처럼 동작하여 독립적인 인스턴스를 가집니다.
 */

// 1. 얕은 복사 테스트 (주소값만 복사)
const arr = [10, 20, 30];
const arr2 = arr; // 같은 주소 참조
arr2[2] = 100;    // 참조된 배열 수정

console.log(arr);   // [10, 20, 100] (원본도 함께 변경됨)
console.log(arr2);  // [10, 20, 100]
console.log(arr === arr2); // true (동일 객체)


// 2. 스프레드 문법을 이용한 복사 (새로운 배열 생성)
const copyArr = [...arr];

console.log(arr);     // [10, 20, 100]
console.log(copyArr); // [10, 20, 100]
console.log(arr === copyArr); // false (서로 다른 객체)


// 3. 객체 얕은 복사 테스트 (주소값만 복사)
const obj = {name: '홍길동', age: 20};
const obj2 = obj; // 같은 주소 참조
obj2.age = 30;    // 참조된 객체 수정

console.log(obj);   // {name: '홍길동', age: 30} (원본도 함께 변경됨)
console.log(obj2);  // {name: '홍길동', age: 30}
console.log(obj === obj2); // true


// 4. 스프레드 문법을 이용한 객체 복사 (새로운 객체 생성)
const copyObj = {...obj};

console.log(obj);     // {name: '홍길동', age: 30}
console.log(copyObj); // {name: '홍길동', age: 30}
console.log(obj === copyObj); // false (서로 다른 객체)


// 5. 함수 인수로 배열 요소 전달 (Spread Syntax)
const numbers = [10, 20, 30];

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(...numbers)); // 60