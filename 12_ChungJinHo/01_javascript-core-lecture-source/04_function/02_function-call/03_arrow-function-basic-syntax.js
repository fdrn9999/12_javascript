/* 화살표 함수 기본 문법
 *
 * - ES6에서 도입된 익명 함수 작성법
 * - 기존 함수 선언 방법보다 간략하게 작성 가능
 * */

/* 기본 함수 표현식 */
const messageOriginal = function () {
  return 'hello world';
};

console.log(messageOriginal());

/* 화살표 함수 */
const message = () => {
  return 'hello world';
};
console.log(message());

// {} 내 한 줄밖에 없으면 생략 가능
const messageSimple = () => 'hello world';
console.log(messageSimple());

let testFn = function () {
  console.log('기존 함수 선언 방법');
};
testFn();

// 화살표 함수로 변경
testFn = () => console.log('화살표 함수 선언 방법');
testFn();

// return 생략
const getName = () => '영희';
console.log(`이름 : ${getName()}`);

// 매개변수를 가진 화살표 함수
const getAge = (age) => age;
console.log(`나이 : ${getAge(20)}`);

// 매개변수가 없는 경우
const getPerson = () => '영희';
console.log(`이름 : ${getPerson()}`);

// 매개변수가 두 개 이상인 경우
const getPerson2 = (name, age) => `이름 : ${name}, 나이 : ${age}`;
console.log(getPerson2('영희', 20));

// 매개변수 기본값 설정
const getPerson3 = (name = '영희', age = 20) => `이름 : ${name}, 나이 : ${age}`;
console.log(getPerson3());
console.log(getPerson3('훈이', 30));
console.log(getPerson3(undefined, 30));
console.log(getPerson3(null, 30));
