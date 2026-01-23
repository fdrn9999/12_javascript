/* 콜백 함수
* - 함수의 매개 변수를 통해
*  다른 함수의 내부로 전달되는 함수 == 콜백 함수
*
* - 매개 변수를 통해
*  함수의 외부에서 콜백 함수를 전달 받는 함수 == 고차 함수
* */

const increase = (value) => value + 1;
const decrease = (value) => value - 1;

/* apply가 콜백 함수를 전달 받아 func에 저장함
 * -> apply는 고차 함수
 * */
const apply = (func, value) => {
  return func(value);
};


/* increase 함수가 apply의 매개 변수로 전달됨
* -> increase는 콜백 함수
* */
console.log(apply(increase, 5)); // 6
console.log(apply(decrease, 5)); // 4

/* 콜백 함수 자리에 직접 익명함수를 작성할 수도 있다*/
console.log(apply((value) => value * 5, 100));



/* - 함수의 변하지 않는 공통 로직은 미리 정의해두고
*   경우에 따라 변경되는 로직은 추상화해서
*   함수 외부에서 내부로 전달하는 방식이다
*
* - 콜백 함수는 함수형 프로그래밍 패러다임뿐만 아니라
* 비동기 처리(이벤트, 타이머, ajax)에 활용되는 중요한 패턴이다.
* 또한 배열 고차 함수(map)에서도 사용 된다.
* */

const arr = [3, 1, 4, 5, 2];
console.log(arr.sort((a, b) => a - b)); // 오름차순
console.log(arr.sort((a, b) => b - a)); // 내림차순

