// ES6에서 var 키워드의 단점을 보완하기 위해 let, const를 도입했다

// let (let x be 5 -> x를 5라고 하자)

// 1. 변수 중복 선언 금지
let msg = '안녕하세요';
console.log(msg);

// SyntaxError: Identifier 'msg' has already been declared
//let msg = '안녕히가세요';
//console.log(msg);


// 2. 블록 레벨 스코프를 가짐
function testFn() {
  if (1 === 1) { // 무조건 true
    let name = '홍길동';
    console.log('블록 내부:', name);
  }
  // console.log(name); // ReferenceError: name is not defined (블록 스코프라 외부에서 접근 불가)
}


testFn();


// 3. 변수 호이스팅
// console.log('--->', test); // ReferenceError: Cannot access 'test' before initialization (TDZ)
let test = '반갑습니다';
console.log(test);
