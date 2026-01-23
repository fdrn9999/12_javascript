// JS에서 function은 객체(object)이다
// -> 객체는 값으로 취급할 수 있음
// -> K : V
// -> K : object
// -> K : function(){} == method
const dog = {
  name: '뽀삐',
  eat: function (food) {
    console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요`); // 메서드에서 같은 객체의 프로퍼티를 참조하려면 this를 사용함.
  },
};

// JS는 메서드/함수 호출 시 매개변수가 없거나 많아도 호출은 된다.
dog.eat();
dog.eat('개뼉다구', '개껌');
dog.eat('개뼉다구');



