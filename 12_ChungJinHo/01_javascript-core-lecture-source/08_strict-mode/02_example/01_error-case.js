// error case

/**
 * 1. 암묵적 전역
 * 선언하지 않은 변수를 참조하면 ReferenceError가 발생합니다.
 */
(function() {
  // 'use strict';
  x = 1; // var, let, const 없이 선언하면 non-strict mode에서는 전역 변수로 인식됨
  console.log(x);
})();

/**
 * 2. 변수, 함수, 매개변수의 삭제
 * delete 연산자로 변수, 함수, 매개변수를 삭제하면 SyntaxError가 발생합니다.
 * 객체의 프로퍼티 삭제 시에만 사용해야 합니다.
 */
(function() {
  // 'use strict';
  var x = 1;
  // delete 연산자는 객체 프로퍼티 삭제 용도입니다. strict mode에서는 변수 삭제 시 에러가 발생합니다.
  delete x;
})();

/**
 * 3. 매개변수의 이름 중복
 * 중복된 매개변수 이름을 사용하면 SyntaxError가 발생합니다.
 */
(function() {
  // 'use strict';
  /**
   * @param {number} x
   * @param {number} x
   */
  function test(x, x) {
    // 엄격 모드 적용 시 parameter name 중복 오류 발생
    return x + x;
  }

  console.log(`test : ${test(1, 2)}`);
})();


/**
 * 4. with 문의 사용
 * with 문을 사용하면 SyntaxError가 발생합니다.
 */
(function() {
  // 'use strict';
  const test = {x: 1, y: 2, z: 3};

  // with 문은 객체 이름을 생략할 수 있어 코드가 간결해지지만,
  // 성능과 가독성 문제로 사용하지 않는 것이 좋습니다.
  with (test) {
    console.log(x);
    console.log(y);
    console.log(z);
  }
})();
