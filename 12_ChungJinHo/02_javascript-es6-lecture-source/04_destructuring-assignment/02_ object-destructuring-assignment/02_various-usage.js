/* 02_various-usage */

/**
 * 객체 구조 분해 할당의 다양한 사용법
 */

const pants = {
  productName: '배기 팬츠',
  color: '검정색',
  price: 30000,
};

// 1. 프로퍼티가 많은 객체에서 원하는 정보만 뽑을 때 사용
const {productName} = pants;
console.log(productName); // 배기 팬츠


// 2. 객체에 존재하지 않는 프로퍼티에 기본값(Default Value) 설정
// - 할당하려는 프로퍼티가 undefined일 경우 기본값이 적용됩니다.
const shirts = {
  productName: '화이트 셔츠',
};

// productName은 pn으로 이름 변경
// color는 객체에 없으므로 기본값 '빨강' 적용 후 co에 할당
// price는 객체에 없으므로 기본값 0 적용 후 pr에 할당
const {productName: pn, color: co = '빨강', price: pr = 0} = shirts;

console.log(pn); // 화이트 셔츠
console.log(co); // 빨강
console.log(pr); // 0


// 3. Rest Property (...rest) 활용
// - 구조 분해 할당 후 남은 나머지 프로퍼티들을 모아 새로운 객체로 만듭니다.
const {productName: productName2, ...rest} = pants;

console.log(productName2); // 배기 팬츠
console.log(rest);         // {color: '검정색', price: 30000}


// 4. 이미 선언된 변수에 구조 분해 할당하기
let pn3, co3, pr3;

// 문법 오류 발생:
// 코드 블록으로 인식되어 에러가 발생하거나, 이미 선언된 변수라 재선언 에러가 발생할 수 있습니다.
// let {productName: pn3, color: co3, price: pr3} = pants; // SyntaxError or TypeError

// 해결 방법:
// 전체 할당문을 소괄호 ()로 감싸서 표현식(Expression)으로 인식시켜야 합니다.
({productName: pn3, color: co3, price: pr3} = pants);

console.log(pn3); // 배기 팬츠
console.log(co3); // 검정색
console.log(pr3); // 30000
