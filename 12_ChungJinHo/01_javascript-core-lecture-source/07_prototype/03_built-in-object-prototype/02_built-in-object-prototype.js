/**
 * @fileoverview 내장 객체(Number 등)의 프로토타입 상속 체인 예제
 */

// Function, String, Number 등을 비롯한 내장 객체 생성자 함수들도
// 각각 자신만의 프로토타입(prototype) 객체를 가지고 있으며, 여기에 메서드를 저장합니다.

// 모든 내장 프로토타입 상속 계층의 최상위에는
// Object.prototype이 존재해야 한다고 명세에 규정되어 있습니다.

const num = new Number(100);

// 1. num 객체는 Number.prototype을 상속받습니다.
console.log(num.__proto__ === Number.prototype); // true

// 2. Number.prototype은 Object.prototype을 상속받습니다. (프로토타입 체인)
console.log(num.__proto__.__proto__ === Object.prototype); // true

// 3. 프로토타입 체인의 최상위는 null입니다. (Object.prototype의 프로토타입은 null)
console.log(num.__proto__.__proto__.__proto__); // null

// 4. 메서드 사용
// num.toString() 호출 시, 체인을 따라 Number.prototype.toString을 찾아 실행합니다.
// (Object.prototype.toString보다 체인상 더 가까운 메서드가 우선됩니다.)
console.log(num);
console.log(num.toString());
