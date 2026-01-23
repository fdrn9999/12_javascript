// const (constant, 상수)
// - let 키워드와 동일한 특징을 가짐
// - 단, 한 번 값을 대입하면 변경할 수 없음.

const x = 1;
// x = 2; // 재할당 금지

const student = {
  name: '홍길동',
};

// 새로운 객체로 재할당 X (왜? 상수니까)
// student = {}

// 객체의 프로퍼티 값을 변경하는 것은 가능하다.
student.name = '홍길순';


