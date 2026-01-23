/**
 * @fileoverview 프로토타입의 특징(this 바인딩, 프로퍼티 가리기, for...in 순회) 예제
 */

const user = {
  id: 'user',
  login() {
    // this는 프로토타입 체인과 상관없이
    // 항상 점(.) 앞의 객체(메서드를 호출한 객체)를 가리킵니다.
    console.log(`${this.id}님 로그인 되었습니다.`);
  },
};

const student = {
  age: 15,
  __proto__: user,
};

// 프로퍼티 가리기 (Property Shadowing)
// : 기존에 상속받은 프로퍼티(user.id)가 존재하더라도,
//   인스턴스(student)에 같은 이름의 프로퍼티를 추가하면
//   인스턴스의 프로퍼티가 더 높은 우선순위를 가집니다.
student.id = 'user01';

student.login(); // user01님 로그인 되었습니다.

// for...in 반복문은 상속받은 열거 가능한(enumerable) 프로퍼티도 순회 대상에 포함합니다.
for (const key in student) {
  // eslint-disable-next-line no-prototype-builtins
  const isOwn = student.hasOwnProperty(key);

  if (isOwn) {
    console.log(`자신의 프로퍼티 : ${key}`);
  } else {
    console.log(`상속 프로퍼티 : ${key}`);
  }
}