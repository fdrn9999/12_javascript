/**
 * @fileoverview 일반 함수와 생성자 함수의 차이점을 보여주는 예제
 */

/*
 * - 일반 함수와 생성자 함수의 형식적인 차이는 없습니다.
 *   (단, 생성자 함수는 관례적으로 첫 글자를 대문자(PascalCase)로 기술하여 구별합니다.)
 *
 * - new 연산자와 함께 호출하면 "생성자 함수"로 동작하여 인스턴스를 생성하고,
 *   new 연산자 없이 호출하면 "일반 함수"로 동작합니다.
 */

/**
 * 학생 정보를 생성하는 생성자 함수
 * @constructor
 * @param {string} name - 학생의 이름
 * @param {number} age - 학생의 나이
 */
function Student(name, age) {
  this.name = name;
  this.age = age;
  this.getInfo = function() {
    return `${this.name}(은)는 ${this.age}세 입니다.`;
  };
}

// 1. new 연산자와 함께 호출 (생성자 함수로 동작)
const student1 = new Student('강감찬', 34);
console.log(student1);
console.log(student1.name);
console.log(student1.age);
console.log(student1.getInfo());

// 2. new 연산자 없이 호출 (일반 함수로 동작)
// -> 일반 함수로 호출된 Student는 반환문(return)이 없으므로 undefined를 반환합니다.
// -> 또한, 함수 내부의 this는 전역 객체(Global Object)를 가리키게 되어
//    전역 변수 name과 age에 값이 할당되는 부수 효과(Global Pollution)가 발생합니다.
const student2 = Student('을지문덕', 50);

console.log(student2); // undefined
// console.log(student2.name); // 에러 발생 (undefined의 프로퍼티 접근 불가)

// (참고) 일반 함수 호출 시 this가 전역 객체에 바인딩되어 발생하는 현상 확인
// console.log(name); // '을지문덕' (브라우저 또는 Node.js 전역 스코프에 따라 다름)
// console.log(age);  // 50


