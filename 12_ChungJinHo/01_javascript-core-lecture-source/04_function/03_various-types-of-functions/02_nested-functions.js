/* 중첩 함수 */
/*
 * - 함수 내부에 함수를 정의하는 함수
 * - 외부 함수 외부에서 내부 함수를 호출할 수 없다.
 * - '중첩 함수'는 보통 "외부 함수"를 돕는 역할을 한다.
 * */

function outer() {
  let outerVal = '외부 함수 변수';

  function inner() {
    let innerVal = '내부 함수 변수';

    console.log(outerVal);
    console.log(innerVal);

    return `${outerVal} ${innerVal}`;
  }
  console.log(inner());
}

outer();
