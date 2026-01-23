/* 객체 리터럴 생성
 * - JS 객체를 나타내는 리터럴 기호 == { K:V } 
 */
var student = {
  // 속성(Property) : 객체의 상태를 나타내는 값으로 "키":값 쌍으로 구성
  name: '유관순',
  age: 16,

  // 기능(function) : 프로퍼티를 참조하고 조작할 수 있는 객체의 동작
  getInfo: function () {
    return `${this.name}(은)는 ${this.age}세 입니다`;
  },
};

console.log(typeof student);
console.log(student);
console.log(student.name);
console.log(student.getInfo); // 함수 코드 자체를 반환
console.log(student.getInfo());


/* 객체는 프로퍼티가 0개 이상 */
var student2 = {};

console.log(typeof student2); // object
