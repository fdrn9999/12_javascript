console.log("외부 js 파일의 내용");

/* DOM이 저장된 변수명 앞에는 $를 붙이는 관례가 있음
* -> 일반 데이터가 저장된 변수명과의 구분을 위해서 관례적으로 사용
* */


/* Document.prototype.querySelect("CSS선택자") */

// DOM객체에서 class 속성 값이 area인 첫 번째 요소 노드 반환
const $area = document.querySelector(".area");
console.log($area);

// DOM객체에서 p태그 중 첫 번째 요소 노드 반환
const $first = document.querySelector("p");
console.log($first);

// DOM객체에서 p태그 중 두 번째(second) 요소 노드 반환
const $second = document.querySelector(".area:nth-of-type(2) > p");
console.log($second);


/* CSS 선택자를 만족하는 요소가 없을 때 null 반환 */
const $noEl = document.querySelector(".noEl");
console.log($noEl);


/*  Document.prototype.querySelectorAll("CSS선택자") */
const $lists = document.querySelectorAll("#list > li");
console.log($lists);


/* class가 food인 요소만 선택하기
* -> 선택된 요소 내에서 메서드 체이닝을 통해 추가 탐색 가능
* */
const $foodList
    = document.querySelector("#list")
    .querySelectorAll(".food");

console.log($foodList);

/* CSS 선택자를 만족 시키지 못한 경우 비어있는 NodeList 반환 */
const $noElList = document.querySelectorAll(".noElList");
console.log($noElList);
