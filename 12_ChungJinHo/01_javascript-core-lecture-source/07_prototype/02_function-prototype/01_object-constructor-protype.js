/**
 * @fileoverview 생성자 함수의 prototype 프로퍼티를 이용한 프로토타입 설정 예제
 */

const user = {
  activate: true,
  login() {
    console.log('로그인 되었습니다.');
  },
};

/**
 * 학생 생성자 함수
 * @constructor
 * @param {string} name - 학생의 이름
 */
function Student(name) {
  this.name = name;
}

// F.prototype은 "일반 프로퍼티"입니다.
// 생성자 함수가 생성할 인스턴스의 부모(__proto__)가 될 객체를 지정하는 역할을 합니다.
// (주의: 객체의 [[Prototype]](__proto__)과 헷갈리지 않아야 합니다.)

// Student 생성자 함수로 생성될 인스턴스들의 부모(프로토타입)를 user 객체로 지정
Student.prototype = user;

const student1 = new Student('홍길동');

// 상속받은 프로퍼티까지 순회
for (const key in student1) {
  // eslint-disable-next-line no-prototype-builtins
  const isOwn = student1.hasOwnProperty(key);

  if (isOwn) {
    console.log(`객체 자신의 property : ${key}`);
  } else {
    console.log(`상속 property : ${key}`);
  }
}

const student2 = new Student('유관순');
console.log(student2.name); // 유관순 (자신의 프로퍼티)
console.log(student2.activate); // true (user에서 상속)
student2.login(); // 로그인 되었습니다. (user에서 상속)
