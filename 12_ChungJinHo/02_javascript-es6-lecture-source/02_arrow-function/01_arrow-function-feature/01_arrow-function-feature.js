/* 01_arrow-function-feature */

/**
 * 화살표 함수 (Arrow Function)의 특징
 * - 화살표 함수는 기존 함수보다 표현식이 간략화되었을 뿐만 아니라,
 *   내부 동작 또한 간략화되어 있습니다.
 */

// 1. 화살표 함수는 자체 'this' 바인딩을 갖지 않는다.
const theater = {
  store: '강남점',
  titles: ['만약에 우리', '아바타3', '주토피아2'],
  showMovieList() {
    // 일반 함수를 이용한 forEach
    this.titles.forEach(function(title) {
      // 일반 함수 내부의 this는 전역 객체(또는 strict mode에서는 undefined)를 가리킵니다.
      // 따라서 this.store는 접근할 수 없습니다.
      console.log(this.store, title); // undefined '영화제목'
    });

    // 화살표 함수를 이용한 forEach
    this.titles.forEach((title) => {
      // 화살표 함수는 자신의 this를 생성하지 않고, 상위 스코프(Lexical Scope)의 this를 참조합니다.
      // 즉, theater 객체의 showMovieList 메서드 내부의 this(theater 객체)를 그대로 사용합니다.
      console.log(this.store, title); // 강남점 '영화제목'
    });
  },
};

theater.showMovieList();


const testFn = () => {
  // 전역 스코프에서 정의된 화살표 함수의 this는 전역 객체를 가리킵니다.
  // 브라우저: window, Node.js: global (또는 모듈 스코프에서는 빈 객체 {}일 수 있음)
  console.log(this);
};

testFn();


// 2. 화살표 함수는 생성자(constructor)로 사용할 수 없다.
// 화살표 함수는 prototype 프로퍼티를 가지고 있지 않으므로 new 연산자와 함께 호출할 수 없습니다.
const ArrowFunc = () => {}; 
// new ArrowFunc(); // TypeError: ArrowFunc is not a constructor (화살표 함수는 생성자가 아님)
console.log(ArrowFunc.hasOwnProperty('prototype')); // false


// 3. 화살표 함수는 자체 'super' 바인딩을 갖지 않는다.
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

class Tiger extends Animal {
  move(lostWeight) {
    // 일반 함수 내부에서는 super 키워드를 사용할 수 없습니다 (SyntaxError).
    // setTimeout(function() {
    //     super.move(lostWeight)
    // }, 3000);

    // 화살표 함수는 자신의 super 바인딩이 없으므로, 상위 스코프(move 메서드)의 super를 참조합니다.
    setTimeout(() => super.move(lostWeight), 3000);
  }
}

let tiger = new Tiger('백두산 호랭이', 90);
tiger.move(1);


// 4. 화살표 함수는 자체 'arguments' 객체를 갖지 않는다.
// arguments 객체는 함수 호출 시 전달된 인수들의 정보를 담고 있는 유사 배열 객체입니다.
(function() {
  console.log(arguments); // [1, 2] (즉시 실행 함수의 arguments)

  // const arrowFunc = function() {
  //     console.log("일반함수 : ", arguments); // [3, 4] (본인의 arguments)
  // };

  // 화살표 함수는 자신의 arguments가 없으므로, 상위 스코프(즉시 실행 함수)의 arguments를 참조합니다.
  const arrowFunc = () => console.log(arguments);
  arrowFunc(3, 4); // 출력: [1, 2]

})(1, 2);


/**
 * [결론]
 * 화살표 함수는 콜백 함수로 자주 사용됩니다.
 * 자신의 this, arguments, super, new.target을 갖지 않고,
 * 상위 스코프(Lexical Context)를 그대로 참조하도록 설계되어 있습니다.
 * 이를 통해 ES5 시절 콜백 함수에서 자주 발생하던 this 바인딩 문제(전역 객체 참조 등)를 간편하게 해결할 수 있습니다.
 */