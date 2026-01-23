/**
 * @fileoverview 8-4. Modern Method
 * 8-4-1. Modern Method (Object.create, getPrototypeOf, setPrototypeOf)
 */

const user = {
  activate: true,
};

// 1. Object.create(proto)
// : [[Prototype]]이 proto를 참조하는 빈 객체를 만듭니다.
const student = Object.create(user);

console.log(student.activate); // true (user에서 상속)


// 2. Object.getPrototypeOf(obj)
// : obj의 [[Prototype]]을 반환합니다.
console.log(Object.getPrototypeOf(student) === user); // true


// 3. Object.setPrototypeOf(obj, proto)
// : obj의 [[Prototype]]이 proto가 되도록 설정합니다.
Object.setPrototypeOf(student, {}); // student의 프로토타입을 빈 객체 {}로 변경

console.log(Object.getPrototypeOf(student) === user); // false


// (참고) __proto__ 접근자 프로퍼티 사용 시 주의사항
// __proto__를 직접 키(key)로 사용하면 의도치 않게 프로토타입이 변경되거나 에러가 발생할 수 있습니다.
// 따라서 프로토타입을 다룰 때는 위에서 소개한 모던 메서드를 사용하는 것이 안전합니다.

const obj = Object.create(user); // obj -> user -> Object.prototype -> null

const key = '__proto__';

// obj[key]는 obj.__proto__와 같으므로, 게터(getter)가 호출되어 프로토타입(user)이 반환됩니다.
console.log(obj[key]); // { activate: true } (user 객체)

// obj[key]에 값을 할당하면, 세터(setter)가 호출되어 obj의 프로토타입이 교체됩니다.
obj[key] = { test: '새로운 객체로 덮어쓰기' };

console.log(obj[key]); // { test: '새로운 객체로 덮어쓰기' } (새로운 프로토타입 객체)
console.log(obj['__proto__']); // { test: '새로운 객체로 덮어쓰기' }

