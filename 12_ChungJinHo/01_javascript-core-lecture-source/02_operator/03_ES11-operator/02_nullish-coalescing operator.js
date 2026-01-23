/* null 병합 연산자 */
// - 좌항의 피연산자가 null 또는 undefined인 경우
//  "우항"의 피연산자를 반환
// - 그렇지 않으면 "좌항"의 피연산자를 반환
// - 변수의 기본값을 설정할 때 유용함

/* 삼항 연산자 */
const obj = 'javascript';
const test1 = obj == null ? '기본값' : obj;
console.log(`test1 : ${test1}`);

/* null 병합 연산자(??) */
const test2 = obj ?? '기본값';
console.log(`test2 : ${test2}`);

const val1 = '' || '기본값';
console.log(val1);

const val2 = '' ?? '기본값';
console.log(val2);
