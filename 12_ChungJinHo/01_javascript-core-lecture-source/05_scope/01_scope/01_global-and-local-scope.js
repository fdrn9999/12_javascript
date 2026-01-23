/* 전역 스코프와 지역 스코프
* 전역(global)
* - 코드의 가장 바깥 영역
* - 전역에 변수를 선언하면 '전역 변수'가 되어 어디서든 참조 가능
*
* 지역(local)
* - 함수 내부(+if, for등 {}도 포함) 몸체 영역
* - 지역에 변수를 선언하면 '지역 변수'가 되어
*  자신의 지역 및 하위 지역에서 참조 가능
* */

var x = 'global x'; // 전역 변수
var y = 'global y'; // 전역 변수


function outer() {
  var z = "outer's local z"; // outer 함수의 지역 변수
  console.log(x);
  console.log(y);
  console.log(z);

  function inner() {
    var x = "inner's local x"; // inner 지역 변수

    console.log(x); // 지역 변수가 전역 변수보다 우선 순위 높음!
    console.log(y);
    console.log(z);
  }

  console.log('-----------');
  inner();
}


outer();