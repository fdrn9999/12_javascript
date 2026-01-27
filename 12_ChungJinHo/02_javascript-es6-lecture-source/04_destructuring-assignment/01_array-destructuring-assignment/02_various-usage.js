/* 02_various-usage */

/**
 * 배열 구조 분해 할당의 다양한 사용법
 */

// 1. 객체 프로퍼티에 할당하기
const user = {};
[user.firstName, user.lastName] = '진호 정'.split(' ');
console.log(user); // {firstName: '진호', lastName: '정'}


// 2. 변수 값 교환 (Swap)
let student = '학생';
let teacher = '선생님';

// [방법 1] 임시 변수를 이용한 swap (기존 방식)
const temp = student;
student = teacher;
teacher = temp;
console.log('student :', student); // 선생님
console.log('teacher :', teacher); // 학생

// [방법 2] 구조 분해 할당 이용 (ES6+)
// 임시 변수 없이 변수 교환 가능
[teacher, student] = [student, teacher];
console.log('student :', student); // 학생
console.log('teacher :', teacher); // 선생님


// 3. Rest Parameter(...rest)와 함께 사용하기
// 배열의 앞부분 요소들을 할당하고 남은 요소들을 다시 배열로 모을 때 유용합니다.
const [sign1, sign2, ...rest] = ['양자리', '염소자리', '사자자리', '처녀자리', '게자리', '물병자리'];

console.log(sign1); // 양자리
console.log(sign2); // 염소자리
console.log(rest);  // ['사자자리', '처녀자리', '게자리', '물병자리']


/**
 * [중요]
 * 4. 기본값(Default Value) 설정하기
 * - 할당할 값이 없거나 undefined일 경우 사용할 기본값을 지정할 수 있습니다.
 */
const [firstName = '아무개', lastName = '김'] = ['병진'];

console.log(firstName); // 병진 (할당된 값)
console.log(lastName);  // 김 (기본값)
