/* 02_object-destructuring-assignment */

/**
 * 객체 구조 분해 할당 (Object Destructuring Assignment)
 * - 객체의 각 프로퍼티를 추출하여 변수에 할당하는 문법입니다.
 * - 프로퍼티 키(Key)를 기준으로 매칭되어 할당됩니다.
 */

const pants = {
  productName: '배기 팬츠',
  color: '검정색',
  price: 30000,
};

// 기존 방식 (점 표기법)
// const a = pants.productName;
// const b = pants.color;
// const c = pants.price;


// 1. 기본 구조 분해 할당
// 변수명이 객체(pants)의 프로퍼티 키와 일치하면 자동으로 분해 할당됩니다.
// 순서는 상관없습니다.
const {productName, price, color} = pants;
console.log(productName, price, color); // 배기 팬츠 30000 검정색


// 2. 다른 변수명으로 할당하기
// {프로퍼티키: 새로운변수명} 형태로 선언할 수 있습니다.
const {productName: pn, price: pr, color: co} = pants;
console.log(pn, pr, co); // 배기 팬츠 30000 검정색