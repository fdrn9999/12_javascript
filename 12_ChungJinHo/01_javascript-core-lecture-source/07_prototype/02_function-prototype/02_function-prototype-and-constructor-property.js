/**
 * @fileoverview 함수의 디폴트 prototype 프로퍼티와 constructor 프로퍼티 관계 예제
 */

/*
 * - 개발자가 특별히 할당하지 않더라도 모든 함수(화살표 함수 등 제외)는
 *   기본적으로 "prototype" 프로퍼티를 갖습니다.
 *
 * - 이 디폴트 프로퍼티 "prototype"은
 *   constructor 프로퍼티 하나만 있는 객체를 가리키며,
 *   여기서 constructor 프로퍼티는 함수 자신을 가리킵니다.
 */

/**
 * 학생 생성자 함수
 * @constructor
 */
function Student() {}

// 함수를 정의하기만 해도 디폴트 프로퍼티인 prototype이 설정됩니다.
// Student.prototype = { constructor: Student };

console.log(Student); // 함수 이름만 작성하면 함수 객체(코드) 자체를 참조합니다.

// Student.prototype.constructor는 Student 함수 자신을 가리킵니다.
console.log(Student.prototype.constructor === Student); // true

// 인스턴스 생성
const student = new Student(); // student 인스턴스는 Student.prototype을 상속받습니다.

// student 객체에는 constructor 프로퍼티가 없지만,
// 프로토타입 체인을 통해 Student.prototype.constructor에 접근할 수 있습니다.
console.log(student.constructor === Student); // true
