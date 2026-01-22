/* 비교 연산자
 * - 동등 비교 연산자 (==, !=) :
 *   암묵적 타입 변환을 통해 타입을 일치 시킨 후 값을 비교
 *
 * - 동일(일치) 비교 연산자(===, !==) :
 *   타입부터 비교 후 같은 경우 값을 비교
 * */

// number  1, string  '1', boolean  true  비교
console.log(`1 == '1' : ${1 == '1'}`);  // true
console.log(`1 === '1' : ${1 === '1'}`);  // 타입이 다름 -> false

console.log(`1 == true : ${1 == true}`); // true
console.log(`1 === true : ${1 === true}`); // 타입이 다름 -> false

console.log(`1 === Number(true) : ${1 === Number(true)}`);

// number 0, string '0', boolean false, 빈문자열 '' 비교
console.log(`0 == '0' : ${ 0 == '0'}`); // true
console.log(`0 === '0' : ${ 0 === '0'}`); // 타입이 다름 -> false

console.log(`0 == false : ${ 0 == false}`); // true
console.log(`0 === false : ${ 0 === false}`); // 타입이 다름 -> false

console.log(`0 == '' : ${ 0 == ''}`); // true
console.log(`0 === '' : ${ 0 === ''}`); // 타입이 다름 -> false

// NaN 비교
console.log(`NaN == NaN : ${ NaN == NaN}`); // false(NaN은 다른 값과 비교할 때 항상 false)
console.log(`NaN === NaN : ${ NaN === NaN}`); // false(NaN은 다른 값과 비교할 때 항상 false)
console.log(`isNaN(NaN) : ${ isNaN(NaN)}`); // true

// 문자열 비교
// Java -> A.equals(B)
// JavaScript -> A == B, A === B
console.log(`'hello' == 'hello' : ${ 'hello' == 'hello'}`); // true
console.log(`'hello' === 'hello' : ${ 'hello' === 'hello'}`); // true

// 문자열 크기 비교
// -> 같은 인덱스 문자를 하나씩 꺼내왕 유니코드로 변호나 후 대소 비교
// -> 꺼내온 문자가 같으면 다음 인덱스 문자로 넘어감
console.log(`'apple' > 'banana' : ${ 'apple' > 'banana'}`); // false
console.log(`'hello' > 'hell' : ${'hello' > 'hell'}`);