// 변수 선언
let str1;
/* 문자열(string) 변수 선언 방법 */
str1 = 'Javascript'; // ""
str1 = 'Javascript'; // ''
str1 = `Javascript`; // ` `


console.log(str1);

/* 템플릿 리터럴 ``(백틱)
 * - ES6부터 도입
 * - 멀티 라인 문자열, 표현식 삽입이 가능함
 * */
const str2 = `안녕하세요
    반갑습니다
    이제 공부하시죠`;

console.log(str2);

const lastName = '홍';
const firstName = '길동';
console.log('제 이름은 ' + lastName + firstName + '입니다 ');
console.log(`제 이름은 ${lastName}${firstName}입니다`);

