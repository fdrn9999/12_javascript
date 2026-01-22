/* 프로퍼티 접근 */

var dog = {
  name: "뽀삐",
  eat: function (food) {
    /* 메서드에서 같은 객체의 프로퍼티를 참조하려면 this를 사용함*/
    console.log(`${this.name}(은)는 ${food}(을)를 맛있게 먹어요`);
  }
}

/* 1. 점 표기법(dot notation) */
console.log(dog.name);
dog.eat('개껌');

/* 2. 대괄호 표기법(square bracket notation) */
// -> [] 내에 key를 작성, 단 key는 뭄조건 ""/'' 붙은 string 형태
console.log(dog['name']);
dog['eat']('닭가슴살');

/* 언제 대괄호 표기법을 사용할까?
 * 1) Key가 작성 규칙을 지키지 않았을 때
 * 2) for in 객체 key 반복 접근문을 이용할 때 
 * */

var obj = {
  'dash-key' : "dash-value",
  0 : 1
};

// console.log(obj.dash-key) // error
// console.log(obj.'dash-key') // error
console.log(obj["dash-key"]);

// console.log(obj.0); // error
// console.log(obj.'0'); // error
console.log(obj['0']);

/* for in */
for(var key in obj){
  console.log(obj[key]);
}