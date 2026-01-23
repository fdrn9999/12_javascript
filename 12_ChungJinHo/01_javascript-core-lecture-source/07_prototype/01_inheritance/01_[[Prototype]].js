/**
 * @fileoverview [[Prototype]]을 이용한 상속과 프로토타입 체인 예제
 */

/* [[Prototype]] */

// 부모 객체 (프로토타입으로 사용될 객체)
const user = {
  activate: false,
  login() {
    console.log('로그인 되었습니다.');
  },
};

// 자식 객체
const student = {
  passion: true,
};

/* __proto__
 * - 객체의 부모(프로토타입)를 가리키는 접근자 프로퍼티입니다.
 * - (참고) __proto__는 비표준이지만 브라우저 호환성을 위해 유지되고 있습니다.
 *   현대적인 방식으로는 Object.getPrototypeOf() 등을 사용하는 것이 권장됩니다.
 */

// student의 부모(프로토타입)를 user로 지정
// -> student가 user를 상속받았다고 표현합니다.
// -> student가 user로부터 상속받은 프로퍼티를 "상속 프로퍼티"라고 부릅니다.
student.__proto__ = user;

console.log(`student.passion: ${student.passion}`); // 자신의 프로퍼티
console.log(`student.activate: ${student.activate}`); // 상속받은 프로퍼티
student.login(); // 상속받은 메서드


/* 프로토타입 체인 */

const greedyStudent = {
  class: 11,
  __proto__: student, // student를 부모로 지정 (user -> student -> greedyStudent)
};

console.log(greedyStudent.class); // 11 (greedyStudent 자신의 프로퍼티)
console.log(greedyStudent.passion); // true (student에서 상속)
console.log(greedyStudent.activate); // false (user에서 상속)
greedyStudent.login(); // '로그인 되었습니다.' (user에서 상속)


/* 상속 계층 구조 (프로토타입 체인) */
/*
 *          user (activate, login)
 *            ^
 *            | [[Prototype]]
 *            |
 *         student (passion)
 *            ^
 *            | [[Prototype]]
 *            |
 *       greedyStudent (class)
 */