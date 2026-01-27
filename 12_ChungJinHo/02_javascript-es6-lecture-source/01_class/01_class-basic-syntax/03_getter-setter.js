/* 03_getter-setter */

class Product {
  constructor(name, price) {
    // setter 메서드를 통해 값 할당
    this.name = name;
    this.price = price;
  }

  /* getter */
  // 프로퍼티 값을 읽으려 할 때 호출됩니다.
  get name() {
    console.log('get name() 동작');
    return this._name; // 실제 값은 _name에 저장
  }

  get price() {
    console.log('get price() 동작');
    return this._price;
  }

  /* setter */
  // 프로퍼티에 값을 할당하려 할 때 호출됩니다.
  set name(name) {
    console.log('set name() 동작');
    this._name = name; // 실제 값은 _name에 저장 (관례상 사용하는 private 프로퍼티 의미)
  }

  set price(price) {
    console.log('set price() 동작');
    if (price < 0) {
      console.log('가격은 음수가 될 수 없습니다.');
      this._price = 0;
      return;
    }
    this._price = price;
  }
}

const product = new Product('노트북', 1000000);

// getter 호출
console.log(product.name);
console.log(product.price);

// setter 호출
product.name = '맥북';
product.price = 2000000;

console.log(product.name);
console.log(product.price);
