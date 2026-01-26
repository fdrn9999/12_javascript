/**
 * 전역 객체(Global Object)
 * - 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체입니다.
 * - Node.js 환경에서는 `global`이 전역 객체이고, 브라우저 환경에서는 `window`가 전역 객체입니다.
 * - 전역 객체는 계층 구조상 어떤 객체에도 속하지 않는 최상위 객체입니다.
 */

/* 빌트인 전역 프로퍼티 */

/**
 * Infinity : 무한대를 나타내는 숫자 값
 * 전역 프로퍼티는 global을 생략하고 참조할 수 있습니다.
 */
console.log(global.Infinity === Infinity); // true
console.log(10 / 0);  // Infinity (양의 무한대)
console.log(-10 / 0); // -Infinity (음의 무한대)
console.log(typeof Infinity); // 'number'

/**
 * NaN : 숫자가 아님(Not a Number)을 나타내는 숫자 값
 * Number.NaN 프로퍼티와 같습니다.
 */
console.log(global.NaN); // NaN
console.log(Number.NaN); // NaN
console.log(Number('abc')); // NaN (숫자로 변환 불가)
console.log(10 * 'abc'); // NaN
console.log(typeof NaN); // 'number'


/**
 * undefined : 원시 타입 undefined
 */
console.log(global.undefined); // undefined
let nothing;
console.log(nothing); // undefined
console.log(typeof undefined); // 'undefined'
