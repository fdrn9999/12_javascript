// parameter(매개변수)와 argument(전달인자)
function hello(name) {
  // arguments
  // 함수 호출 시 전달된 인수를 참조할 수 있는
  // 유사 배열 객체
  console.log('arguments', arguments);
  console.log(arguments[1]);
  return `안녕 ${name}`;
}


/* JS는 매개변수의 개수와 관계없이 전달인자의 수를 임의로 지정할 수 있다. */
hello();
hello('영희');
hello('영희', '철수');
hello('영희', '철수', '훈이');

const result = hello();
const result2 = hello('영희');
const result3 = hello('영희', '철수');
const result4 = hello('영희', '철수', '훈이');

console.log('result : ', result, result2, result3, result4);




/* 매개변수의 기본값 설정
 * - 매개 변수에 값이 전달되지 않거나 undefined인 경우
 *   설정한 기본값이 대입되도록 할 수 있다.
 */
function hi(name = '아무개') {
  return `안녕 ${name}`;
}


console.log(hi());
console.log(hi('영희'));
console.log(hi('훈이'));
console.log(hi(undefined));
