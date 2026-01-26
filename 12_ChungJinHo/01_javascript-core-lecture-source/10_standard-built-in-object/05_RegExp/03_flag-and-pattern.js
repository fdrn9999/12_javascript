/**
 * Flag의 종류
 * - i (ignore case): 대소문자를 구별하지 않고 패턴을 검색합니다.
 * - g (global): 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색합니다.
 * - m (multi line): 문자열의 행이 바뀌어도 검색을 계속합니다.
 *
 * Flag는 옵션이므로 선택적으로 사용하며, 순서와 상관없이 하나 이상의 플래그를 동시에 설정할 수 있습니다.
 */

let target = 'Java JavaScript';

console.log(target.match(/VA/)); // null (대소문자 구별)
console.log(target.match(/VA/i)); // index: 2 (대소문자 무시)
console.log(target.match(/VA/ig)); // ['va', 'va'] (대소문자 무시 + 전역 검색)


/**
 * Pattern
 * - 패턴에는 특별한 의미를 가지는 메타문자 또는 기호를 포함할 수 있습니다.
 */

console.log('='.repeat(50));

// . : 임의의 한 글자 (줄바꿈 문자 제외)
target = 'abcdefg';
console.log(target.match(/../g));   // 임의의 2자리 문자열 전역 검색
console.log(target.match(/abcd.../));

// {m,n} : 최소 m번, 최대 n번 반복되는 문자열 (반복 검색)
target = 'a aa aaa b bb bbb ab aab abb bbbbb';
console.log(target.match(/a{2,3}/g));  // a가 최소 2번 ~ 최대 3번 반복
console.log(target.match(/b{2}/g)); // b가 2번 반복
console.log(target.match(/b{3,}/g)); // b가 3번 이상 반복


// + : 앞선 패턴이 최소 한 번 이상 반복되는 문자열 (반복 검색)
// +는 {1,}과 같습니다.
console.log(target.match(/b+/g));

// ? : 앞선 패턴이 최대 한 번(0번 포함) 포함되는 문자열
// ?는 {0,1}과 같습니다.
target = 'soul seoul seul';
console.log(target.match(/se?oul/g));
