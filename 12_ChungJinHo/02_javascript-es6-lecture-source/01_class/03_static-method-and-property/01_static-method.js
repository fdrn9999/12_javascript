/* 01_static-method */

/**
 * 정적 메서드 (Static Method)
 * - 특정 인스턴스에 종속되지 않고 클래스 전체에 필요한 기능을 구현할 때 사용합니다.
 * - 인스턴스를 생성하지 않고 클래스 이름으로 직접 호출할 수 있습니다.
 */

class Student {
  constructor(name, height) {
    this.name = name;
    this.height = height;
  }

  /**
   * 클래스 선언부 내에서 static 키워드를 붙여 정적 메서드를 선언합니다.
   * 학생 인스턴스의 키를 비교해주는 메서드로 정의했습니다.
   */
  static compare(studentA, studentB) {
    return studentA.height - studentB.height;
  }
}


let students = [
  new Student('유관순', 165.5),
  new Student('홍길동', 180.5),
  new Student('선덕여왕', 159.5),
];

// static 메서드인 compare 메서드를 이용해서 정렬
students.sort(Student.compare);
console.log(students);


/*
 * Student 클래스(함수 객체)의 프로퍼티로 메서드 추가
 * == static 메서드
 */
Student.testMethod = () => {
  console.log('해당 메서드는 Student에 등록된 static 메서드입니다.');
  console.log('static 메서드는 객체에 프로퍼티로 함수를 할당하는 것과 같습니다.');
};

// 정적(static) 메서드는 인스턴스 생성 없이 클래스명.메서드명()으로 호출 가능합니다.
// 반면, 프로토타입 메서드는 인스턴스를 생성한 후에만 호출할 수 있습니다.
Student.testMethod();


/**
 * 팩토리 메서드 패턴 예시
 * - 조건에 맞는 객체를 생성해야 할 때, 생성자 대신 정적 메서드를 사용하여 객체를 반환하는 방식입니다.
 * - 생성자만으로는 표현하기 힘든 객체 생성 로직이나 의미를 부여할 수 있습니다.
 */
class User {
  constructor(id, registDate) {
    this.id = id;
    this.registDate = registDate;
  }

  /**
   * 사용자 등록을 위한 팩토리 메서드
   * @param {string} id
   * @return {User}
   */
  static registUser(id) {
    // this는 메서드를 호출한 클래스(User)를 가리킵니다.
    return new this(id, new Date());
  }
}

let user01 = User.registUser('user01');
console.log(user01);
