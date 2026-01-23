/**
 * @fileoverview 생성자 함수의 인스턴스 생성 과정을 설명하는 예제
 */

// 인스턴스 생성 과정

/**
 * 학생 생성자 함수
 * @constructor
 * @param {string} name - 학생의 이름
 * @param {number} age - 학생의 나이
 * @return {(!Object|number)} 명시적 반환값이 없을 경우 this, 원시값 반환 시 무시됨
 */
function Student(name, age) {
  // 1. 암묵적 인스턴스 생성 및 this 바인딩
  // new 연산자와 함께 호출되면, 암묵적으로 빈 객체가 생성되고 this에 바인딩됩니다.
  // 이 과정은 함수 본문의 코드가 실행되기 전(런타임 이전)에 처리됩니다.
  console.log(this);

  // 2. this에 바인딩되어 있는 인스턴스 초기화
  // 프로퍼티를 추가하고 값을 할당합니다.
  this.name = name;
  this.age = age;
  this.getInfo = () => {
    return `${this.name}(은)는 ${this.age}세 입니다.`;
  };

  console.log(this);

  // 3. 인스턴스 반환
  // 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환됩니다.

  // return { name: '나야' };
  // -> 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시됩니다.

  return 1;
  // -> 명시적으로 원시값을 반환하면 return 구문이 무시되고 this가 반환됩니다.
}

const student = new Student('홍길동', 17);
console.log(student);
