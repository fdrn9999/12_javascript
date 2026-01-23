/* 반환문 */
function hello(name) {
  // return문이 실행되면 함수 호출이 종료된다.
  // return문 다음의 코드는 실행되지 않는다.
  // return문은 함수를 종료하고 호출자에게 결과값을 반환한다.
  return `안녕 ${name}`;
  console.log('test');
}

console.log(hello('영희'));

/* 반환값이 없는 함수 */
function func() {
  console.log('함수 호출');
  return; // 함수 종료
}


console.log(func()); // undefined