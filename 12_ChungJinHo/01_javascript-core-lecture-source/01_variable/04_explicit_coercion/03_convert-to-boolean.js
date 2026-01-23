/* 논리 타입으로 명시적으로 변환 */

// 1. Boolean 생성자 함수를 new 연산자 없이 호출
console.log(Boolean('JavaScript')); // true
console.log(Boolean('')); // false
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(Infinity)); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean({})); // true
console.log(Boolean([])); // true


// 2. !! 연산자 사용
console.log(!!'JavaScript', typeof !!'JavaScript'); // true
console.log(!!'', typeof !!''); // false
console.log(!!1, typeof !!1); // true
console.log(!!0, typeof !!0); // false
console.log(!!NaN, typeof !!NaN); // false
console.log(!!Infinity, typeof !!Infinity); // true
console.log(!!null, typeof !!null); // false
console.log(!!undefined, typeof !!undefined); // false
console.log(!!{}, typeof !!{}); // true
console.log(!![], typeof !![]); // true