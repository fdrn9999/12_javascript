/**
 * @fileoverview Object.prototype과 객체 생성 시 프로토타입 연결에 대한 예제
 */

// Object는 내장 객체 생성자 함수입니다.
// 이 생성자 함수의 prototype은 toString, valueOf 등
// 다양한 메서드가 구현된 거대한 객체를 참조합니다.

// new Object() 또는 객체 리터럴({})을 사용해 객체를 만들 때,
// 생성된 객체의 [[Prototype]](__proto__)은 Object.prototype을 참조하게 됩니다.

const obj = {}; // new Object()와 동일

// 생성된 객체(obj)의 부모(프로토타입)는 Object.prototype입니다.
console.log(obj.__proto__ === Object.prototype); // true

// 따라서 obj는 Object.prototype에 정의된 메서드(toString 등)를 상속받아 사용할 수 있습니다.
console.log(obj.toString === obj.__proto__.toString); // true
console.log(obj.toString === Object.prototype.toString); // true