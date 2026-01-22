console.log("로그를 출력하는 함수");

/* 여러 줄 주석 */

/* 숫자 타입 */
/* 
 * Javascript는 Java와 다르게 변수 선언 시 타입을 먼저 지정하지 않는다!
 * -> 대입되는 값(리터럴)에 따라서 타입이 결정된다.
*/

// 변수 선언 방법 -> var 변수명 = 값;
var integer = 10;
var double = 1.23;
var negative = -100;
/* 숫자는 정수,실수 가리지 않고 모두 "number 타입" */
console.log(integer);
console.log(double);
console.log(negative);

/* 연산 */
/* number는 모두 실수로 처리된다. */
console.log(integer == 10.0);
console.log(integer / 4);  // 2.5

