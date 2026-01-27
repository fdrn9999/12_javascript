// ## 1-3. 제시 된 숫자값 배열과 문자값 배열을 오름차순 정렬, 내림차순 정렬하여 출력한다.
// - 힌트 : sort

// output
/*
[ 9, 20, 37, 54, 88, 100 ]
[ 100, 88, 54, 37, 20, 9 ]
[ 'hello', 'js', 'party', 'wow' ]
[ 'wow', 'party', 'js', 'hello' ]
*/

let numbers = [20, 100, 37, 54, 88, 9];
let strings = ['wow', 'js', 'party', 'hello'];

console.log(numbers.sort((a, b) => a - b)); // 오름차순
console.log(numbers.sort((a, b) => b - a)); // 내림차순
console.log(strings.sort()); // 오름차순
console.log(strings.sort((a, b) => b.localeCompare(a))); // 내림차순
