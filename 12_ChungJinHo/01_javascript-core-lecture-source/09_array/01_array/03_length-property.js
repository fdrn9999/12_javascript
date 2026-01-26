// length property는 배열 요소의 개수를 나타내는 0 이상의 정수를 가집니다.

console.log('1. 빈 배열의 length :', [].length); // 0

const arr = [1, 2, 3, 4, 5];
console.log('2. [1, 2, 3, 4, 5]의 length:', arr.length);

// length property 값은 배열 요소가 추가/제거될 때마다 자동으로 갱신됩니다.
arr.push(6); // 배열 마지막 요소 추가
console.log('3. push(6) 후 배열:', arr);
console.log('length:', arr.length);

arr.pop(); // 배열 마지막 요소 제거
console.log('4. pop() 후 배열:', arr);
console.log('length:', arr.length);

// length property에 임의의 값을 명시적으로 할당할 수 있습니다.
// -> 배열 길이를 초과한 요소들이 제거됩니다.
// -> 배열 길이가 현재 요소보다 커지면 empty(빈 슬롯)으로 채워집니다.
arr.length = 3;
console.log('5. length를 3으로 설정:', arr); // [1, 2, 3]

arr.length = 10;
console.log('6. length를 10으로 설정:', arr);


// 자바스크립트는 배열의 요소가 연속적으로 위치하지 않고
// 일부가 비어있는 '희소 배열'을 허용합니다.
const sparse = [, 2, , 4];
console.log('7. 희소 배열: ', sparse);
console.log('8. 희소 배열의 내부 구조 :', Object.getOwnPropertyDescriptors(sparse));

/* for in vs for of */

/* for in >> 객체 내 key(인덱스) 값을 순회합니다. */
console.log('9. for in');
for (const key in arr) {
  console.log(key, arr[key]);
}

/* for of >> 배열의 요소(값)를 순회합니다. */
console.log('10. for of');
for (let item of arr) {
  console.log(item);
}
