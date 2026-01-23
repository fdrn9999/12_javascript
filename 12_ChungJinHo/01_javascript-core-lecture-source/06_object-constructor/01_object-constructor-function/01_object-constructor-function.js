// Object 생성자 함수
// - {} 리터럴 객체로 객체 생성하는 것과 같음
// - new 연산자와 함께 Object 생성자 함수를 호출하면 비어있는 객체가 생성된다.
// (권장) 실무에서는 가독성 및 속도 측면에서 객체 리터럴 `{}` 사용을 권장합니다.


const student = new Object(); // == {}

/* 객체에 프로퍼티 추가 */
student.name = '유관순';
student.age = 16;
console.log(student);
