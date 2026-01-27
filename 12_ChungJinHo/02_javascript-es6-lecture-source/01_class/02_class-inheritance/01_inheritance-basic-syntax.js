/* 01_inheritance-basic-syntax */

// 상속 기본 문법
class Animal {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  eat(foodWeight) {
    this.weight += foodWeight;
    console.log(`${this.name}(은)는 ${foodWeight}kg 의 식사를 하고 ${this.weight}kg이 되었습니다.`);
  }
}

/**
 * Animal을 상속받은 Human 클래스 선언 -> extends 키워드 사용
 */
class Human extends Animal {

  // Human 클래스에 생성자가 없으면, 부모인 Animal의 constructor가 자동으로 호출됩니다.
  // (암묵적으로 default constructor가 생성됨)

  /**
   * 상속받은 기능 외에 Human만의 고유한 기능 추가
   */
  develop(language) {
    console.log(`${this.name}(은)는 ${language}로 개발을 합니다. 정말 즐겁습니다~~:)`);
  }
}

const human = new Human('정진호', 55);
human.eat(1);              // 부모 클래스의 메서드 호출
human.develop('javascript'); // 자식 클래스의 메서드 호출
