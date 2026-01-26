/* 01_RegExp */

/**
 * 정규 표현식(Regular Expression)
 * - 일정한 패턴을 가진 문자열의 집합을 표현하는 언어입니다.
 */

// 검색 대상
const target = 'JavaScript';

// 1. 정규 표현식 객체 생성 리터럴 - /pattern/flag
let regExp = /j/i;
// 패턴: j, flag: i(ignore case) => 대소문자 구분 없이 검색

/**
 * RegExp.prototype.test(문자열)
 * - 정규식과 매칭되는 부분이 문자열 내에 있으면 true, 없으면 false를 반환합니다.
 */
console.log(regExp.test(target)); // true


// 2. RegExp 생성자 함수 - new RegExp(pattern[, flag])
regExp = new RegExp('j', 'i');
regExp = new RegExp(/j/, 'i');
regExp = new RegExp(/j/i);          // ES6부터 가능한 표현
