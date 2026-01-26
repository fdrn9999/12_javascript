/* 01_Number
표준 빌트인 객체인 Number는
원시 타입인 숫자를 다룰 때 유용한 프로퍼티와 메서드를 제공한다. */

/* Number 생성자 함수 */
const obj = new Number(); // 0 할당
console.log(obj, typeof obj);

const obj2 = new Number(1); // 1할당
console.log(obj2);

const obj3 = new Number('1');
console.log(obj3);              // 인수로 전달 받은 문자 숫자로 형변환

const obj4 = new Number('number');
console.log(obj4);              // 숫자 형변환 불가 시 NaN

/* new 연산자를 사용하지 않고 Number 호출 하기
* -> Number 인스턴스 생성 X, number 타입으로 파싱
*   --> 명시적 형변환 시 사용
* */
const obj5 = Number('123');
console.log(obj5, typeof obj5);

