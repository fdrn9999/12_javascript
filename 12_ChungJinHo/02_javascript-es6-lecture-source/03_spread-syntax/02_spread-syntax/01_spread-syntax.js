/* 01_spread-syntax */

/**
 * 스프레드 문법 (Spread Syntax, 전개 문법)
 * - 반복 가능한(iterable) 객체(배열, 문자열, Set, Map 등)를 개별 요소로 분리하여(확장하여) 사용할 수 있게 합니다.
 */

const arr = [10, 20, 30];

// Math.max는 숫자를 인수로 받지만, 배열을 전달하면 NaN이 반환됩니다.
console.log(`가장 큰 값 : ${Math.max(arr)}`); // NaN

// 기존 방식 (apply 또는 인덱스 접근)
console.log(`가장 큰 값 : ${Math.max(arr[0], arr[1], arr[2])}`);

// 스프레드 문법 사용
console.log(`가장 큰 값 : ${Math.max(...arr)}`); // 개별 요소로 분리되어 전달됨


const arr1 = [10, 20, 30];
const arr2 = [100, 200, 300];

// arr1, arr2 두 배열에서 가장 큰 값 찾기
console.log(`가장 큰 값 : ${Math.max(...arr1, ...arr2)}`);

// 배열 병합 (Array Merge)
// 0, arr1의 모든 요소, arr2의 모든 요소가 합쳐진 새로운 배열 생성
const mergedArr = [0, ...arr1, ...arr2];
console.log(mergedArr);


/**
 * 문자열 전개
 * - 문자열도 이터러블이므로 스프레드 문법 사용이 가능합니다.
 */
// 문자열을 한 글자씩 쪼개기
const str = 'JavaScript';

// 1) charAt(i)
console.log(str.charAt(0));

// 2) split()
console.log(str.split(''));

// 3) spread syntax
console.log([...str]); // ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']