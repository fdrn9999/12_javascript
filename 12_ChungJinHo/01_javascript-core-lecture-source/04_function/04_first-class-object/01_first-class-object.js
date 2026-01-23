// 일급 객체
// 1. 변수에 할당할 수 있다.
// 2. 다른 함수의 인자로 전달할 수 있다.
// 3. 다른 함수의 반환값이 될 수 있다.

// 1. 함수를 변수에 할당 (함수 표현식)
const hello = function () {
  console.log('안녕하세요!');
};


// 2. 함수를 인자로 전달
function repeat(func, count) {
    for (let i = 0; i < count; i++) {
        func(); // 전달받은 함수를 실행
    }
}
repeat(hello, 3);

// 3. 함수를 반환값으로 사용
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
const add5 = makeAdder(5);
console.log(add5(10)); // 15
