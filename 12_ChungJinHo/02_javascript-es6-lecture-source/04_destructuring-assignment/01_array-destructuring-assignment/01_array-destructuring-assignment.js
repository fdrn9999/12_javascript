/* 01_array-destructuring-assignment */

/**
 * 배열 구조 분해 할당 (Array Destructuring Assignment)
 * - 배열이나 이터러블의 요소를 개별 변수에 분해하여 할당하는 문법입니다.
 */

const nameArr = ['길동', '홍'];

// 기존 방식 (인덱스 접근)
// const firstName = nameArr[0];
// const lastName  = nameArr[1];

// 구조 분해 할당
// nameArr[0] 값을 firstName 변수에, nameArr[1] 값을 lastName 변수에 할당
const [firstName, lastName] = nameArr;
console.log('firstName :', firstName);
console.log('lastName :', lastName);


// 반환 값이 배열인 split 메서드 활용 예시
const [firstName2, lastName2] = '순신 이'.split(' ');
console.log('firstName2 :', firstName2);
console.log('lastName2 :', lastName2);


// 쉼표를 사용하여 필요하지 않은 배열 요소를 건너뛸 수 있습니다.
const arr = ['first', 'second', 'third'];

const [var1, , var2] = arr; // 두 번째 요소는 무시됨
console.log(var1, var2); // first third
