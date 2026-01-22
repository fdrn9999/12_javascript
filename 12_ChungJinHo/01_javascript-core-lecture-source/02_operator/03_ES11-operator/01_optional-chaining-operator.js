/* 옵셔널 체이닝 연산자 '?' (ES11 (2020)에 추가)
* - 좌항의 피연산자가 null 또는 undefined인 경우 undefined 반환
* - 좌항이 Truthy한 경우 우항을 반환
* */
var obj = null;
var val = obj?.value;
console.log(`val : ${val}`); // undefined

obj = { value:100 };
val = obj?.value;
console.log(`val : ${val}`); // 100


var str = ''; 

var len1 = str?.length;
console.log(`len1 : ${len1}`); // 0

var len2 = str && str.length;
console.log(`len2 : ${len2}`); // ''