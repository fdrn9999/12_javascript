/* 03_nested-destructuring-assignment */

/**
 * 중첩 구조 분해 할당 (Nested Destructuring)
 * - 객체나 배열이 중첩된 형태일 때, 구조를 맞춰 변수를 선언하면 깊은 곳의 속성까지 한 번에 추출할 수 있습니다.
 */

const product = {
  size: {
    width: 10,
    height: 30,
  },
  items: ['doll', 'robot'],
};


// 1. 중첩된 객체(size)와 배열(items)에서 값 추출
// - size 프로퍼티 내부의 width, height를 직접 변수로 추출
// - items 프로퍼티를 그대로 추출
const {
  size: {width, height},
  items,
} = product;

console.log(width);  // 10
console.log(height); // 30
console.log(items);  // ['doll', 'robot']


// 2. 별칭(Alias) 사용 및 배열 요소 추출까지 한 번에 하기
// - width -> w, height -> h (별칭 사용)
// - items 배열의 첫 번째, 두 번째 요소를 각각 item1, item2로 추출
const {
  size: {width: w, height: h},
  items: [item1, item2],
} = product;

console.log(w);     // 10
console.log(h);     // 30
console.log(item1); // doll
console.log(item2); // robot
console.log(...items);