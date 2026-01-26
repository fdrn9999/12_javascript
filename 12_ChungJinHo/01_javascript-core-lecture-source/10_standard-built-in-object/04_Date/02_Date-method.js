/* 02_Date-method */

/**
 * Date.now
 * - 1970년 1월 1일 00:00:00(UTC)을 기점으로 현재 시간까지 경과한 밀리초를 숫자로 반환합니다.
 */
const now = Date.now();
console.log(now);
console.log(new Date(now));
console.log('------------------');


/**
 * Date.parse
 * - 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 지정 시간(dateString)까지의 밀리초를 숫자로 반환합니다.
 * - new Date(dateString)의 인수와 동일한 형식을 사용합니다.
 */
console.log(Date.parse('Jan 1, 1970 09:00:00'));
console.log(Date.parse('Jan 1, 1970 09:00:00 UTC'));
console.log(Date.parse('1970/01/01/09:00:00'));
console.log(Date.parse('1970/01/01/09:00:00 UTC'));
console.log('------------------');


/**
 * Date.UTC
 * - 1970년 1월 1일 00:00:00(UTC)을 기점으로 인수로 전달된 지정 시간까지의 밀리초를 숫자로 반환합니다.
 * - new Date(year, month[, ...])와 같은 형식의 인수를 사용합니다.
 * - 인수는 로컬 타임(KST)이 아닌 UTC로 인식됩니다.
 */
console.log(Date.UTC(1970, 0, 1));
console.log('------------------');


/**
 * 연, 월, 일, 시, 분, 초, 밀리초 반환 및 설정 메서드
 */
const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());        // 0(1월) ~ 11(12월) 반환
console.log(date.getDate());
console.log(date.getDay());          // 0(일요일) ~ 6(토요일) 반환
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());

date.setFullYear(2020);
date.setMonth(0);
date.setDate(1);
date.setHours(9);
date.setMinutes(10);
date.setSeconds(10);
date.setMilliseconds(10);
console.log(date);
console.log('------------------------');


/**
 * Date.prototype.getTime / Date.prototype.setTime
 * - 1970년 1월 1일 00:00:00(UTC)을 기점으로 경과된 밀리초를 반환하거나 설정합니다.
 */
const date2 = new Date();
console.log(date2.getTime());
date2.setTime(5 * 24 * 60 * 60 * 1000);
console.log(date2);
console.log('------------------------');


/**
 * Date.prototype.getTimezoneOffset
 * - UTC와 Date 객체에 지정된 로케일 시간과의 차이를 분 단위로 반환합니다.
 * - KST(한국 표준시)는 UTC+9이므로 -540이 반환됩니다. (분 단위: -540 / 60 = -9시간)
 */
const today = new Date();
console.log('--->', today.getTimezoneOffset());
console.log(today.getTimezoneOffset() / 60);
console.log('------------------------');


/**
 * Date.prototype.to___String
 * - 사람이 읽을 수 있는 형식의 문자열로 Date 객체의 날짜를 반환합니다.
 */
console.log(today.toString());
console.log(today.toDateString());
console.log(today.toTimeString());
console.log(today.toISOString());
console.log(today.toLocaleString());
console.log(today.toLocaleTimeString());