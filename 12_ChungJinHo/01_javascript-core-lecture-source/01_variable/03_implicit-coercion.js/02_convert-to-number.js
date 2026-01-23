/* 숫자 타입으로 암묵적 변환 */

// 1. 산술 연산자
// - 산술 연산자의 피연사자는 모두 숫자(Number) 이어야만 한다.
// -> 암묵적으로 Number 타입으로 변환
console.log('10' / 2); // 5
console.log(10 % 'three'); // NaN

// 2. 비교 연산자
// - 비교 연산자의 피연사자는 모두 숫자(Number) 이어야만 한다.
// -> 암묵적으로 Number 타입으로 변환
console.log('10' < 2); // false
console.log(10 > 'three'); // false

// 문자는 숫자로 변환시 NaN이 되기 때문에
// 비교 연산자는 NaN과 비교할 때 항상 false를 반환한다.
console.log(`10 > a : ${'10' > 'a'}`); // false

/* 참고 : NaN끼리 비교할 때는 항상 false를 반환한다. */
console.log(`NaN == NaN :  ${NaN == NaN}`); // false

console.log(`isNaN(NaN) : ${isNaN(NaN)}`); // true

/* 3. + 단항 연산자 */
// 피연산자가 숫자 타입이 아니면
// 숫자 타입 값으로 암묵적 타입 변환 수행
console.log(`+true : ${+true}`); // 1
console.log(`+false : ${+false}`); // 0
console.log(`+'10' : ${+'10'}`); // 10
console.log(`+'ten' : ${+'ten'}`); // NaN
console.log(+null); // 0
console.log(+undefined); // NaN
// console.log(+Symbol()); // TypeError
console.log(+{}); // NaN
console.log(+[10]); // 10
console.log(+[10, 20]); // NaN
console.log(+function () { var a = 1; }); // NaN


/* 기억할 것
 * 1) 빈 문자열, 빈 배열, null, false -> 0
 * 2) true -> 1
 * 3) undefined, NaN, 함수, 객체 -> NaN
 * 4) 배열 -> 첫 번째 요소만 있을 때 첫 번째 요소, 그렇지 않으면 NaN
 * */