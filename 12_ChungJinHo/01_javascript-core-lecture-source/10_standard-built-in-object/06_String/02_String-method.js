/* 02_String-method */

/**
 * String 객체의 불변성
 * - 문자열은 변경 불가능한 원시 값이기 때문에 String 래퍼 객체도 읽기 전용 객체로 제공됩니다.
 */
const obj = new String('홍길동');
console.log(Object.getOwnPropertyDescriptors(obj));   // writable : false
console.log('--------------------------------');

// String 객체의 모든 메서드는 String 래퍼 객체를 직접 변경할 수 없고,
// String 객체의 메서드는 언제나 새로운 문자열을 생성하여 반환합니다.


/**
 * String.prototype.indexOf
 * - 대상 문자열에서 인수로 전달받은 문자열을 검색하여 첫 번째 인덱스를 반환합니다.
 * - 검색에 실패하면 -1을 반환합니다.
 */
const str = 'JavaScript';
console.log(str.indexOf('a'));      // 1
console.log(str.indexOf('b'));      // -1
console.log(str.indexOf('a', 2));   // 3 (인덱스 2부터 검색 시작)

// 특정 문자열 존재 유무 확인에 사용
if (str.indexOf('a') !== -1) console.log('a가 있다');
console.log('--------------------------------');


/**
 * String.prototype.includes
 * - 대상 문자열에 인수로 전달받은 문자열이 포함되어 있는지 여부를 그 결과를 true/false로 반환합니다.
 */
console.log(str.includes('a'));     // true
console.log(str.includes('b'));     // false
console.log(str.includes('a', 2));  // true (인덱스 2부터 검색 시작)

if (str.includes('a')) console.log('a가 있다');
console.log('--------------------------------');


/**
 * String.prototype.search
 * - 인수로 전달받은 정규 표현식과 매치하는 문자열을 검색하여 일치하는 문자열의 인덱스를 반환합니다.
 */
console.log(str.search(/a/));
console.log(str.search(/b/));       // -1 (검색 실패)
console.log('--------------------------------');


/**
 * String.prototype.startsWith / String.prototype.endsWith
 * - 대상 문자열이 인수로 전달받은 문자열로 시작하는지/끝나는지 여부를 반환합니다.
 */
console.log(str.startsWith('Ja'));
console.log(str.startsWith('va', 2));   // true (인덱스 2부터 시작하는 문자열이 'va'로 시작하는지)
console.log(str.endsWith('pt'));
console.log(str.endsWith('va', 4));     // true (길이 4인 문자열 'Java'가 'va'로 끝나는지)
console.log('--------------------------------');


/**
 * String.prototype.charAt
 * - 인수로 전달받은 인덱스에 위치한 문자를 검색하여 반환합니다.
 */
for (let i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
}
console.log('--------------------------------');


/**
 * String.prototype.substring
 * - 대상 문자열에서 첫 번째 인수로 전달받은 인덱스에 위치하는 문자부터
 *   두 번째 인수로 전달받은 인덱스에 위치하는 문자의 바로 이전 문자까지의 부분 문자열을 반환합니다.
 */
console.log(str.substring(1, 4));    // 'ava'
console.log(str.substring(1));      // 'avaScript' (두 번째 인수 생략 시 끝까지)
console.log(str.substring(4, 1));    // 'ava' (인수 교환 동작)
console.log(str.substring(-1));     // 'JavaScript' (음수는 0으로 취급)
console.log(str.substring(1, 20));   // 'avaScript' (length보다 크면 length로 취급)
console.log('--------------------------------');


/**
 * String.prototype.slice
 * - substring과 동일하게 동작하지만 음수인 인수를 전달하면 가장 뒤에서부터 시작하여 잘라내 반환합니다.
 */
console.log(str.slice(1, 4));        // 'ava'
console.log(str.slice(1));          // 'avaScript'
console.log(str.slice(4, 1));        // '' (substring과 달리 인수 교환 안 됨 -> 빈 문자열 반환)
console.log(str.slice(-1));         // 't' (뒤에서부터)
console.log(str.slice(1, 20));       // 'avaScript'
console.log('--------------------------------');


/**
 * String.prototype.toUpperCase / String.prototype.toLowerCase
 * - 문자열을 대문자/소문자로 변경하여 반환합니다.
 */
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log('--------------------------------');


/**
 * String.prototype.trim
 * - 문자열 앞뒤 공백 문자를 제거한 후 반환합니다.
 */
const str2 = '   JavaScript   ';
console.log(str2.trim());
console.log('--------------------------------');


/**
 * String.prototype.repeat
 * - 인수로 전달받은 정수만큼 반복해 연결한 새로운 문자열을 반환합니다.
 */
console.log(str.repeat());          // ''
console.log(str.repeat(0));         // ''
console.log(str.repeat(1));         // 'JavaScript'
console.log(str.repeat(2));         // 'JavaScriptJavaScript'
console.log(str.repeat(2.5));       // 'JavaScriptJavaScript' (실수는 정수로 버림 처리)
// console.log(str.repeat(-1));     // RangeError: Invalid count value
console.log('--------------------------------');


/**
 * String.prototype.replace
 * - 첫 번째 인수로 전달받은 문자열 또는 정규표현식을 검색하여
 *   두 번째 인수로 전달한 문자열로 치환한 문자열을 반환합니다.
 */
console.log(str.replace('Java', 'Type'));
console.log(str.replace('a', 'b'));         // 'JbvaScript' (첫 번째 매칭만 치환)
console.log(str.replace(/j/i, 'Z'));         // 'ZavaScript' (정규표현식 사용)
console.log('--------------------------------');


/**
 * String.prototype.split
 * - 첫 번째 인수로 전달한 문자열 또는 정규식을 검색하여 문자열을 구분한 후
 *   분리된 각 문자열로 이루어진 배열을 반환합니다.
 */
const str3 = 'Hello, Everyone! Nice to see you again.';
console.log(str3.split(' '));       // 공백 구분
console.log(str3.split(''));        // 한 글자씩 분리
console.log(str3.split());          // 전체를 단일 요소 배열로 반환
console.log(str3.split(' ', 5));    // 배열 길이 제한