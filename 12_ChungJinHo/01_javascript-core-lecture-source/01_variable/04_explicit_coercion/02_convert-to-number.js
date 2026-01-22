/* 숫자(number) 타입으로 명시적 변환 */

// 1. Number 생성자 함수를 new 연산자 없이 호출
console.log(Number('123'), typeof Number('123'));
console.log(Number(true), typeof Number(true));
console.log(Number(null), typeof Number(null));
console.log(Number(undefined), typeof Number(undefined));
console.log(Number(NaN), typeof Number(NaN));
console.log(Number(Infinity), typeof Number(Infinity));
console.log(Number(-Infinity), typeof Number(-Infinity));

// 2. parseInt() 함수 사용
console.log(parseInt('123'), typeof parseInt('123'));
console.log(parseInt('123.321'), typeof parseInt('123.321'));
console.log(parseInt(true), typeof parseInt(true));
console.log(parseInt(null), typeof parseInt(null));
console.log(parseInt(undefined), typeof parseInt(undefined));
console.log(parseInt(NaN), typeof parseInt(NaN));
console.log(parseInt(Infinity), typeof parseInt(Infinity));
console.log(parseInt(-Infinity), typeof parseInt(-Infinity));

// 3. parseFloat() 함수 사용
console.log(parseFloat('123'), typeof parseFloat('123'));
console.log(parseFloat(true), typeof parseFloat(true));
console.log(parseFloat(null), typeof parseFloat(null));
console.log(parseFloat(undefined), typeof parseFloat(undefined));
console.log(parseFloat(NaN), typeof parseFloat(NaN));
console.log(parseFloat(Infinity), typeof parseFloat(Infinity));
console.log(parseFloat(-Infinity), typeof parseFloat(-Infinity));


// 4. + 연산자 사용
// pass

// 5. * 연산자 사용
console.log('123' * 1, typeof ('123' * 1));
console.log(true * 1, typeof (true * 1));
console.log(null * 1, typeof (null * 1));
console.log(undefined * 1, typeof (undefined * 1));
console.log(NaN * 1, typeof (NaN * 1));
console.log(Infinity * 1, typeof (Infinity * 1));
console.log(-Infinity * 1, typeof (-Infinity * 1));

// 