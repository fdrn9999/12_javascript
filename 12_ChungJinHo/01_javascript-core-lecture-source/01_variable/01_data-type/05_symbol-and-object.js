/* symbol
 * - ES6에서 추가된 7번째 타입
 * - 다른 값과 중복되지 않는 유일무이한 값을 지정할 때 사용
 *   (이름 충동 위험이 없는 객체의 유일한 프로퍼티 키값 생성 시 사용)
 * */
let key = 'key';
console.log(key, typeof key);
key = Symbol('key');
console.log(key, typeof key);


/* Object(객체) 타입 */
/*
 * - JS의 데이터 타입은 크게 원시타입과 객체타입으로 분류된다.
 * - 원시타입 : number, string, boolean, undefined, null, symbol
 * - 객체타입 : object(object, array, function, date, error, regexp, ...)
 * - JS 객체는 { K : V } 형태로 구성된다.
 */
const obj = {};
console.log(obj, typeof obj);
obj.name = '홍길동';
console.log(obj);
console.log(typeof obj);
console.log(obj.name);
console.log(typeof obj.name);
