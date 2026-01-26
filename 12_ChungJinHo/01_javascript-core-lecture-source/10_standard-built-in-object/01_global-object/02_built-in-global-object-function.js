/* 02_built-in-global-object-function */

/**
 * isFinite
 * - 전달받은 인수가 정상적인 유한수인지 검사하여 유한수이면 true, 무한수이면 false를 반환합니다.
 * - 전달받은 인수가 숫자가 아닌 경우 숫자로 적절히 변환 후 검사를 수행하며, NaN으로 평가되는 값이면 false를 반환합니다.
 */
console.log(isFinite(10));              // true
console.log(isFinite('10'));            // true
console.log(isFinite(null));            // true (null -> 0)

console.log(isFinite(Infinity));        // false
console.log(isFinite(-Infinity));       // false

console.log(isFinite(NaN));             // false
console.log(isFinite('abc'));           // false
console.log('-------------------------------');


/**
 * isNaN
 * - 전달받은 인수가 NaN인지 검사하여 그 결과를 불리언 타입으로 반환합니다.
 * - 전달받은 인수가 숫자가 아닌 경우 숫자로 변환 후 검사를 수행합니다.
 */
console.log(isNaN(NaN));                // true
console.log(isNaN(10));                 // false

console.log(isNaN('abc'));              // true
console.log(isNaN('10'));               // false
console.log(isNaN(''));                 // false ('' -> 0)

console.log(isNaN(true));               // false (true -> 1)
console.log(isNaN(false));              // false (false -> 0)

console.log(isNaN(undefined));          // true (undefined -> NaN)

console.log(isNaN({}));                 // true
console.log('-------------------------------');


/**
 * parseFloat
 * - 전달받은 문자열 인수를 부동 소수점 숫자(실수)로 해석하여 반환합니다.
 */
console.log(parseFloat('10.01'));       // 10.01
console.log(parseFloat('10'));          // 10

// 공백으로 구분된 문자열은 첫 번째 문자열만 변환합니다.
console.log(parseFloat('10 20 30'));    // 10

// 숫자가 아닌 문자열은 제외하고 변환합니다.
console.log(parseFloat('10cm'));        // 10

// 첫 번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환합니다.
console.log(parseFloat('GS25'));        // NaN

// 앞뒤 공백은 무시합니다.
console.log(parseFloat('  1004  '));    // 1004

/**
 * parseInt
 * - 전달받은 문자열 인수를 정수로 해석하여 반환합니다.
 */
console.log(parseInt('10'));            // 10
console.log(parseInt('10.01'));         // 10
console.log(parseInt('1a'));            // 10

console.log(Number('1a'));              // NaN (Number 생성자 함수는 문자열 포함 시 NaN 반환)
console.log('-------------------------------');


/**
 * encodeURI
 * - URI(인터넷에 있는 자원을 나타내는 유일한 주소)를 문자열로 전달받아
 *   이스케이프 처리를 위해 인코딩합니다.
 * - 네트워크를 통해 정보를 공유할 때 어떤 시스템에서도 읽을 수 있는 아스키 문자 셋으로 변환합니다.
 */
const uri = 'http://greedy.com?name=홍길동&job=student';
const enc = encodeURI(uri);
console.log(enc);

/**
 * decodeURI
 * - 인코딩된 URI를 인수로 전달받아 이스케이프 처리 이전으로 디코딩합니다.
 */
const dec = decodeURI(enc);
console.log(dec);


/**
 * encodeURIComponent
 * - URI 구성 요소를 인수로 전달받아 알파벳, 0~9의 숫자, - _ . ! ~ * ' ( ) 문자는 제외하고 인코딩합니다.
 * - 쿼리 스트링 구분자로 사용되는 =, ?, &까지 모두 인코딩합니다.
 */
const uriComp = 'name=홍길동&job=student';
const encComp = encodeURIComponent(uriComp);
console.log(encComp);               // name%3D%ED%99%8D%EA%B8%B8%EB%8F%99%26job%3Dstudent

/**
 * decodeURIComponent
 * - 매개변수로 전달된 URI 구성 요소를 디코딩합니다.
 */
const decComp = decodeURIComponent(encComp);
console.log(decComp);               // name=홍길동&job=student
