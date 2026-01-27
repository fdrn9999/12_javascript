/* 01_class-declaration */

/**
 * 클래스 선언 (Class Declaration)
 * - JavaScript에서 클래스는 사실 함수의 한 종류입니다.
 * - 프로토타입 기반 상속을 더 명료하고 사용하기 쉽게 만든 문법적 설탕(Syntactic Sugar)에 가깝습니다.
 */

class Student {
  /**
   * 생성자 (Constructor)
   * - 인스턴스를 생성하고 초기화하는 특별한 메서드입니다.
   * - JavaScript 클래스의 생성자는 하나만 존재할 수 있습니다.
   * @param {string} name
   */
  constructor(name) {
    // this는 생성되는 인스턴스를 가리킵니다.
    this.name = name;
    // 생성되는 Student 객체의 name 프로퍼티에 전달받은 name을 할당

    this.group = 1;
  }


  /**
   * 프로토타입 메서드
   * - 클래스 내부에 정의한 메서드는 자동으로 해당 클래스의 프로토타입(Prototype)의 메서드로 추가됩니다.
   */
  introduce() {
    console.log(`안녕하세요 저는 ${this.group}반 학생 ${this.name} 입니다.`);
  }
}


const student = new Student('홍길동');
student.introduce();

console.log(typeof student); // object (생성된 인스턴스)
console.log(typeof Student); // function (클래스는 본질적으로 함수)
console.log(Student === Student.prototype.constructor); // true (프로토타입과의 연결 확인)
console.log(Object.getOwnPropertyNames(Student.prototype)); // ['constructor', 'introduce']


// --------------------------------------------------------------------------

// 클래스 문법과 유사하게 동작하는 생성자 함수 예시
function Teacher(name) {
  this.group = 1;
  this.name = name;
}

// 생성자 함수에 프로토타입 메서드 추가
Teacher.prototype.introduce = function() {
  console.log(`안녕하세요 저는 ${this.group}반 교사 ${this.name} 입니다.`);
};

const teacher = new Teacher('유관순');
teacher.introduce();


/**
 * 클래스와 생성자 함수의 차이점
 */

// 1. 클래스는 new 키워드 없이 호출하면 오류가 발생합니다.
//    반면 생성자 함수는 new 키워드 없이 호출해도 일반 함수처럼 동작합니다(물론 this 바인딩 문제는 발생할 수 있음).
// Student();
// TypeError: Class constructor Student cannot be invoked without 'new'

Teacher(); // 오류 발생 X (일반 함수로 호출됨, strict mode가 아니면 전역 객체에 프로퍼티가 추가될 수 있음)


// 2. 클래스에 정의된 메서드는 열거 불가능(non-enumerable)합니다.
console.log('--- Student (Class) ---');
for (let method in student) {
  console.log('method:', method); // name, group (프로토타입 메서드인 introduce는 출력되지 않음)
}

console.log('--- Teacher (Function) ---');
for (let method in teacher) {
  console.log('method:', method); // name, group, introduce (모두 열거됨)
}
