// strict-mode 적용

/**
 * 1. 전역에 strict mode 적용
 * -> var, let, const 변수 선언 키워드가 누락되면 변수로 인식하지 않음(에러 발생).
 */

// 'use strict';

// x = 20;

function test() {
  // 2. 함수 레벨로 strict mode 설정
  'use strict';
  // x = 10;
}
// test();

function test2() {
  x = 30;
}
test2();

console.log('x : ', x);


/*
 * 전역에 엄격 모드를 적용하면 스크립트 태그 단위로 적용되어
 * strict mode와 non-strict mode의 혼용으로 인한 오류가 발생할 수 있음에 유의해야 한다.
 *
 * <script>
 *   'use strict';
 * </script>
 * <script>
 *    x = 10;   // 엄격 모드 적용되지 않음, 에러 발생 안 함
 * </script>
 */

// 화면 로딩이 끝난 후 수행해라
// window.addEventListener('DOMContentLoaded', () => {
//   'use strict';
// });


/**
 * 서드파티 라이브러리가 non-strict mode인 경우
 * 즉시 실행 함수로 스크립트 전체를 감싸서 스코프를 구분하고,
 * 즉시 실행 함수 선두에 strict mode를 적용한다.
 */
(function() {
  /* strict mode 적용 */
  'use strict';

  // temp = 100;
  const temp = 100;
  console.log('temp : ', temp);
})();

(function() {
  /* strict mode 미적용 서드파티 라이브러리 */

})();


