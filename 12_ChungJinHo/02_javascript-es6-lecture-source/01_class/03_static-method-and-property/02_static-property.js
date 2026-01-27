/* 02_static-property */

/**
 * 정적 프로퍼티 (Static Property)
 * - 클래스의 인스턴스가 아닌 클래스 자체에 귀속되는 프로퍼티입니다.
 * - 최신 JavaScript 스펙(ES2022 등)에서 정식으로 지원하게 되었습니다.
 * - 특정 인스턴스의 상태가 아닌, 클래스 전체에 공유되어야 하는 데이터(설정값 등)를 저장할 때 유용합니다.
 */

// Animal 클래스 선언
class Animal {

  // static public field 선언
  static planet = '지구';

  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  eat(foodWeight) {
    this.weight += foodWeight;
    console.log(`${this.name}(은)는 ${foodWeight}kg의 식사를 하고 ${this.weight}kg이 되었습니다.`);
  }

  move(lostWeight) {
    if (this.weight > lostWeight) {
      this.weight -= lostWeight;
      console.log(`${this.name}(은)는 움직임으로 인해 ${lostWeight}kg 감량되어 ${this.weight}kg이 되었습니다.`);
    }
  }
}

/* non-static 프로퍼티 호출 */
console.log('--- 인스턴스 생성 및 프로퍼티 접근 ---');
// 인스턴스를 생성해야만 name, weight 프로퍼티에 접근 가능
const animal1 = new Animal('토끼', 5);
console.log(animal1.name);
console.log(animal1.weight);
// console.log(animal1.planet); // undefined (인스턴스로는 static 프로퍼티에 접근 불가)

/* static 프로퍼티 호출 */
console.log('--- 정적 프로퍼티 접근 ---');
// 인스턴스 생성 없이 '클래스명.프로퍼티명'으로 직접 접근
console.log(Animal.planet);


/* static 프로퍼티 동적 추가 */
console.log('--- 정적 프로퍼티 동적 추가 ---');
// JavaScript에서 클래스는 함수이며, 함수는 객체입니다.
// 따라서 일반 객체처럼 프로퍼티를 동적으로 추가할 수 있습니다.
Animal.staticProperty = 'staticProperty';
console.log(Animal.staticProperty);

// 인스턴스에서는 여전히 접근 불가
console.log(animal1.staticProperty); // undefined
