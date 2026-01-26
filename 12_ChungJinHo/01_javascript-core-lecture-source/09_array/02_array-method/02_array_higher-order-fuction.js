/* 배열 고차 함수 */
// 고차 함수란? 함수를 인수로 전달받거나 함수를 반환하는 함수를 말합니다.

/**
 * Array.prototype.sort : 정렬
 */
let numbers = [];
for (let i = 0; i < 10; i++) {
  numbers[i] = Math.floor(Math.random() * 100 + 1);
}

console.log('정렬 전 :', numbers);

numbers.sort();
console.log('numbers.sort() 후 :', numbers);

// sort()의 기본 정렬은 "문자열(Unicode 코드 포인트) 오름차순"입니다.
// 숫자 정렬이나 다른 기준의 정렬이 필요하면 비교 함수(callback)를 sort()에 전달해야 합니다.
numbers.sort((a, b) => a - b); // 오름차순
console.log('numbers.sort((a, b) => a - b) 후 :', numbers);

numbers.sort((a, b) => b - a); // 내림차순
console.log('numbers.sort((a, b) => b - a) 후 :', numbers);


/**
 * Array.prototype.forEach
 * - for 문을 대체하여 배열을 순회하는 고차 함수입니다.
 */
numbers = [1, 2, 3, 4, 5];
numbers.forEach((item) => console.log(item));

console.log('forEach(item, index, array)');
numbers.forEach((item, index, array) => {
  console.log(`[${index}] : ${item}, ${array}`);
});


/* 중요 */
/**
 * Array.prototype.map()
 * - 배열 요소 전체를 대상으로 콜백 함수를 호출하고,
 *   그 반환값들로 구성된 새로운 배열을 반환합니다.
 */
const original1 = [true, 1, 'text'];

const types = original1.map((item) => typeof item);
console.log('types :', types);

const original2 = ['apple', 'banana', 'cat', 'dog', 'egg'];

// 각 요소의 글자 수만 포함하는 새로운 배열 생성
const lengths = original2.map((item) => item.length);
console.log('lengths :', lengths);

/* 중요 */
/**
 * Array.prototype.filter()
 * - 배열 요소 전체를 대상으로 콜백 함수를 호출하고,
 *   반환값이 true인 요소만으로 구성된 새로운 배열을 반환합니다.
 */
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 홀수 요소만으로 이루어진 새 배열 생성
const odds = numbers.filter((item) => item % 2);
console.log('odds :', odds);

// 짝수 요소만으로 이루어진 새 배열 생성
const evens = numbers.filter((item) => item % 2 === 0);
console.log('evens :', evens);


/**
 * Array.prototype.reduce()
 * - 배열을 순회하며 각 요소에 대하여 콜백 함수를 실행하고,
 *   그 실행 결과를 누적하여 반환합니다.
 */
numbers.reduce((previousValue, currentValue, currentIndex, array) => {
  console.log(`[${currentIndex}] 이전값: ${previousValue}, 현재값: ${currentValue}`);
  return currentValue;
});

// reduce를 이용한 합산 구하기
const sum = numbers.reduce((prev, curr) => prev + curr);
console.log('sum :', sum);

// reduce를 이용한 최대값 구하기
const max = numbers.reduce((prev, curr) => (prev > curr ? prev : curr));
console.log('max :', max);


/**
 * Array.prototype.some()
 * - 배열 내 일부 요소가 콜백 함수 테스트를 통과하는지 확인하여
 *   true 또는 false를 반환합니다.
 */
const testArr = [1, 5, 3, 2, 4];

// 배열 내 요소 중 10보다 큰 요소가 하나라도 있는가?
let result = testArr.some((item) => item > 10);
console.log('result :', result);

// 배열 내 요소 중 3보다 큰 요소가 하나라도 있는가?
result = testArr.some((item) => item > 3);
console.log('result :', result);


/**
 * Array.prototype.every()
 * - 배열 내 모든 요소가 콜백 함수 테스트를 통과하는지 확인하여
 *   true 또는 false를 반환합니다.
 */
// 모든 요소가 2보다 큰가?
result = testArr.every((item) => item > 2);
console.log('result :', result);

// 모든 요소가 0보다 큰가?
result = testArr.every((item) => item > 0);
console.log('result :', result);


/**
 * Array.prototype.find()
 * - 배열을 순회하며 콜백 함수의 반환값이 true인 첫 번째 요소를 반환합니다.
 * - 만족하는 요소가 없으면 undefined를 반환합니다.
 */

/**
 * Array.prototype.findIndex()
 * - 배열을 순회하며 콜백 함수의 반환값이 true인 첫 번째 요소의 인덱스를 반환합니다.
 * - 만족하는 요소가 없으면 -1을 반환합니다.
 */

const students = [
  {name: '유관순', score: 90},
  {name: '홍길동', score: 80},
  {name: '장보고', score: 70},
];

console.log(
    '이름이 홍길동인 학생 찾기 :',
    students.find((item) => item.name === '홍길동')
);

console.log(
    '이름이 이순신인 학생 찾기 :',
    students.find((item) => item.name === '이순신')
);


console.log(
    '이름이 홍길동인 학생 인덱스 찾기 :',
    students.findIndex((item) => item.name === '홍길동')
);

console.log(
    '이름이 이순신인 학생 인덱스 찾기 :',
    students.findIndex((item) => item.name === '이순신')
);


// 점수가 80점 이상인 학생 모두 찾기 (1개는 find, n개는 filter)
result = students.filter((item) => item.score >= 80);
console.log('80점 이상 학생 :', result);

// 점수가 80점 이상인 학생의 이름만 찾기
result = students.filter((item) => item.score >= 80).map((item) => item.name);
console.log('80점 이상 학생의 이름 :', result);