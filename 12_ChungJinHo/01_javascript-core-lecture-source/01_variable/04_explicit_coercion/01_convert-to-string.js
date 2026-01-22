/* 문자열(string) 타입으로 명시적 변환 */

// 1. String 생성자 함수를 new 연산자 없이 호출
console.log(String(123), typeof String(123));
console.log(String(true), typeof String(true));
console.log(String(null), typeof String(null));
console.log(String(undefined), typeof String(undefined));
console.log(String(NaN), typeof String(NaN));
console.log(String(Infinity), typeof String(Infinity));
console.log(String(-Infinity), typeof String(-Infinity));
console.log(String(Symbol()), typeof String(Symbol()));
console.log(String({}), typeof String({}));
console.log(String([]), typeof String([]));
console.log(String(function(){}), typeof String(function(){}));

// 2. toString() 메소드 사용
console.log((123).toString(), typeof (123).toString());
console.log((true).toString(), typeof (true).toString());
console.log((null).toString(), typeof (null).toString());
console.log((undefined).toString(), typeof (undefined).toString());
console.log((NaN).toString(), typeof (NaN).toString());
console.log((Infinity).toString(), typeof (Infinity).toString());
console.log((-Infinity).toString(), typeof (-Infinity).toString());
console.log((Symbol()).toString(), typeof (Symbol()).toString());
console.log(({}).toString(), typeof ({}).toString());
console.log(([]).toString(), typeof ([]).toString());
console.log((function(){}).toString(), typeof (function(){}).toString());