/* 03_constructor-overriding */

// 생성자 오버라이딩
class Animal {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }
}

/**
 * 다른 클래스를 상속받으면서 constructor를 명시적으로 선언하지 않으면
 * 아래와 같이 비어있는 생성자가 암묵적으로 정의됩니다.
 */
class Tiger extends Animal {
  // constructor(...args) {
  //    super(...args);
  // }
}

class Deer extends Animal {
  constructor(name, weight, legLength) {
    // 상속받은 클래스의 생성자(derived constructor)에서는
    // this를 사용하기 전에 반드시 super()를 호출해야 합니다.
    super(name, weight);
    this.legLength = legLength;
  }
}