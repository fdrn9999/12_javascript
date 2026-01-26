/**
 * 1. new Date()
 * - 인수를 전달하지 않으면 현재 날짜와 시간을 가지는 Date 객체를 반환합니다.
 */
console.log(new Date());


/**
 * 2. new Date(milliseconds)
 * - 1970년 1월 1일 00:00:00(UTC)를 기점으로 전달된 밀리초만큼 경과한 날짜와 시간을 나타내는 Date 객체를 반환합니다.
 */
console.log(new Date(0));
console.log(new Date(1000 * 60 * 60 * 24));


/**
 * 3. new Date(dateString)
 * - 날짜와 시간을 나타내는 문자열을 인수로 전달하면 지정된 날짜와 시간을 나타내는 Date 객체를 반환합니다.
 */
console.log(new Date('Jan 26, 2026 09:00:00'));
console.log(new Date('2026/01/26/09:00:00'));


/**
 * 4. new Date(year, month[, day, hour, minute, second, millisecond])
 * - 연, 월, 일, 시, 분, 초, 밀리초를 의미하는 숫자를 인수로 전달하면 지정된 날짜와 시간을 나타내는 Date 객체를 반환합니다.
 * - 연, 월은 반드시 지정해야 하며 지정하지 않은 정보는 0 또는 1로 초기화됩니다.
 * - month는 0(1월) ~ 11(12월)이므로 주의해야 합니다.
 */
console.log(new Date(2022, 1)); // 2022년 2월
console.log(new Date(2022, 1, 1, 9, 0, 0, 0)); // 2022년 2월 1일 09:00:00