/* 순수 함수와 비순수 함수 */
/*
* 순수 함수 : 외부 상태에 의존하지 않고 외부 상태를 변경하지 않는 함수
* 
* 비순수 함수 : 외부 상태에 의존하거나 외부 상태를 변경하는 함수
* (비순수는 지양)
*
* */
let count = 0;

// 순수 함수 : 외부 상태에 의존하지 않고 외부 상태를 변경하지 않는 함수
// 동일한 인수가 전달되면 언제나 동일한 값을 반환한다.
function increase(n) {
  return ++n;
}

// 순수 함수가 반환한 결과값으로 상태 업데이트
count = increase(count);
console.log(count); // 1
count = increase(count);
console.log(count); // 2


console.log('---------------------------');

let count2 = 0;

// 비순수 함수 : 외부 상태에 의존하거나 외부 상태를 변경하는 함수
// 외부 상태인 count2를 변경하므로 비순순 함수이다.
function decrease() {
  return --count2; // 외부 상태에 의존하며 외부 상태를 변경 (사이드 이펙트)
}

// 비순수 함수는 외부 상태를 직접 수정하므로 상태 변화를 추적하기 어려워진다.
decrease();
console.log(count2); // -1
decrease();
console.log(count2); // -2

