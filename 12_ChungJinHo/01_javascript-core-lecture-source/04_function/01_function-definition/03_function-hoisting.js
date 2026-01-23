// 함수 호이스팅(끌어 올리다)

/* 함수 선언문은 런타임 이전에 JS엔진에 의해서 먼저 실행된다. 
 * (실행 전에 어떤 함수가 있는지 모두 파악한 상태)
 * -> 함수 선언문 이전에 함수를 호출하는 구문이 있어도 오류가 없음.
 * == 함수 호이스팅
 * - 함수 선언문을 위로 끌어 올리는 것처럼 동작하는 것
 */
console.log(hello('철수'));

function hello(name) {
  return `hello ${name}님 안녕하세요`;
}


console.log(hello('영희'));

/* 함수 표현식은 함수 선언문과는 다르게 호이스팅이 발생하지 않는다. */
console.log(calc(1, 2)); // TypeError or ReferenceError depending on declaration

var calc = function (a, b) {
  return a + b;
};

console.log(calc(10, 20));

