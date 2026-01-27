/* 02_method-overriding */

/**
 * 메서드 오버라이딩 (Method Overriding)
 * - 부모 클래스로부터 상속받은 메서드를 자식 클래스에서 재정의하여 사용하는 것입니다.
 */

class Animal {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  move(lostWeight) {
    if (this.weight > lostWeight) {
      this.weight -= lostWeight;
      console.log(`${this.name}(은)는 움직임으로 인해 ${lostWeight}kg 감량되어 ${this.weight}kg이 되었습니다.`);
    }
  }
}

const animal = new Animal('호랑이', 270);
animal.move(2);


class Tiger extends Animal {

  /**
   * 자식만의 메서드
   */
  attack(target) {
    console.log(`${this.name}(은)는 ${target}을 공격합니다.`);
  }

  /**
   * 부모로부터 상속받은 move() 메서드 오버라이딩
   * - 별도의 어노테이션(@Override 등) 없이 메서드명, 매개변수만 동일하게 작성하면 됩니다.
   */
  move(target) {
    this.attack(target);
    // super 키워드: 부모 클래스의 프로퍼티나 메서드에 접근할 때 사용하는 참조 변수
    super.move(0.1);
  }
}

const tiger2 = new Tiger('백두산호랑이', 400);
tiger2.move('사슴');
