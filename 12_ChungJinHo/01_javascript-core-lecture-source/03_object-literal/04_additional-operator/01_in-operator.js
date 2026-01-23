/* in 연산자 : 객체 내 프로퍼티 존재 여부를 확인하는 연산자 */
const student = {
  name: '유관순',
  age: 16,
  test: undefined,
};

// student.name에 값이 대입되어 있는지 확인
console.log(student.name === undefined); // false
console.log(student.age === undefined); // false
// student.test에 값이 대입되어 있는지 확인
console.log(student.test === undefined); // true

console.log('test' in student); // true
console.log('name' in student); // true
console.log('age' in student); // true



