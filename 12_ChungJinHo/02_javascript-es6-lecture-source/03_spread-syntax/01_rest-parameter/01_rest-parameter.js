/* 01_rest-parameter */

/**
 * 나머지 매개변수 (Rest Parameter)
 * - 함수 정의 시 매개변수 이름 앞에 `...`을 붙여서 사용합니다.
 * - 함수에 전달된 인수들의 목록을 "배열"로 전달받습니다.
 * - Java의 가변 인자(Variable Arguments)와 유사한 개념입니다.
 */

// 1. 일반 함수에서의 매개변수 처리
function merge(msg1, msg2) {
  return msg1 + msg2;
}

// 인수가 매개변수 개수보다 적으면 나머지는 undefined가 되고,
// 인수가 매개변수 개수보다 많으면 초과된 인수는 무시됩니다 (arguments 객체로는 접근 가능하지만 매개변수로는 할당되지 않음).
console.log(merge('안녕하세요', '반갑습니다'));
console.log(merge('안녕하세요', '반갑습니다', '식사하실래요?')); // '식사하실래요?'는 무시됨


// 2. 나머지 매개변수 (Rest Parameter) 사용
// ...args: 전달된 모든 인수를 args라는 이름의 배열로 받습니다.
function mergeAll(...args) {
  let message = '';

  for (const arg of args) {
    message += arg + ' ';
  }

  return message;
}

console.log(mergeAll('안녕하세요', '반갑습니다'));
console.log(mergeAll('안녕하세요', '반갑습니다', '식사하실래요?'));
