/* 04_function-parameter */

/**
 * 함수 매개변수에 객체 구조 분해 할당 적용
 * - 함수의 매개변수가 많거나, 일부 매개변수만 선택적으로 전달받고 싶을 때 유용합니다.
 * - 매개변수의 순서를 기억할 필요가 없으며, 코드 가독성이 좋아집니다.
 */

// 1. 일반적인 함수 매개변수 정의 (구조 분해 할당 미사용)
function displayProduct(producer = '아무개', width = 0, height = 0, items = []) {
  console.log(`producer: ${producer}`);
  console.log(`width: ${width}`);
  console.log(`height: ${height}`);
  console.log(`items: ${items}`);
}

// 문제점: 인자의 순서가 고정되어 있습니다.
// producer와 items만 전달하고 싶어도, 중간에 있는 width, height 자리에 undefined를 명시적으로 넘겨야 합니다.
displayProduct('신사임당', undefined, undefined, ['Coffee', 'Donut']);


// 2. 객체 구조 분해 할당을 이용한 매개변수 정의
// - 매개변수를 하나의 객체로 전달받아 내부에서 구조 분해하여 사용합니다.
// - { ... } = {} 초기화를 통해 인자가 아예 전달되지 않았을 때의 오류를 방지합니다.
function displayProduct2({
  producer = '아무개',
  width = 0,
  height = 0,
  items = [],
} = {}) {
  console.log('--- displayProduct2 ---');
  console.log(`producer: ${producer}`);
  console.log(`width: ${width}`);
  console.log(`height: ${height}`);
  console.log(`items: ${items}`);
}

// 함수 호출 시 객체 형태로 필요한 값만 전달
// 순서에 상관없이 이름(Key)으로 매칭됩니다.
const temp = {
  producer: '홍길동',
  items: ['doll', 'robot'],
};

displayProduct2(temp);

// 빈 객체 호출 (기본값 적용 확인)
displayProduct2();
