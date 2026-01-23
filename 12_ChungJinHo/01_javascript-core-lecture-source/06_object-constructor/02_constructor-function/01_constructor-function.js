/**
 * @fileoverview 객체 리터럴과 생성자 함수의 차이점을 보여주는 예제
 */

/* 생성자 함수 */
/*
 * - {} 객체 리터럴을 이용한 객체 생성 방식은
 *   간편하고 직관적이지만 단 하나의 객체만 생성할 수 있습니다.
 *
 * - 생성자 함수는
 *   같은 구조(프로퍼티, 메서드)를 갖는 객체를 여러 개 생성할 때 효율적입니다.
 */

// 1. 객체 리터럴 방식
const student1 = {
  name: '강성훈',
  age: 31,
  getInfo() {
    return `${this.name}(은)는 ${this.age}세 입니다.`;
  },
};

const student2 = {
  name: '정진호',
  age: 27,
  getInfo() {
    return `${this.name}(은)는 ${this.age}세 입니다.`;
  },
};

console.log(student1.getInfo());
console.log(student2.getInfo());


/* Student 생성자 함수 선언, 정의 */
// (중요) 생성자 함수의 함수명은 "PascalCase(대문자로 시작)"를 준수합니다.

/**
 * 학생 정보를 관리하는 생성자 함수
 * @constructor
 * @param {string} name - 학생의 이름
 * @param {number} age - 학생의 나이
 */
function Student(name, age) {
  // 생성자 함수 내 this 참조변수 == 생성되는 객체(인스턴스)
  this.name = name;
  this.age = age;

  /**
   * 학생 정보를 반환하는 메서드
   * @return {string} 이름과 나이 정보 문자열
   */
  this.getInfo = function() {
    return `${this.name}(은)는 ${this.age}세 입니다.`;
  };
}

/* 생성자 함수를 이용해 새 객체(인스턴스) 생성 */
const student3 = new Student('정병진', 30);
const student4 = new Student('박찬진', 27);

console.log(student3.getInfo());
console.log(student4.getInfo());
