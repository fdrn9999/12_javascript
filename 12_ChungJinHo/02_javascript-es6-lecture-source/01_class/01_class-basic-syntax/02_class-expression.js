/* 02_class-expression */

/**
 * 클래스 표현식 (Class Expression)
 * - 클래스도 값으로 취급될 수 있는 일급 객체이므로 표현식으로 정의할 수 있습니다.
 */

// 1. 익명 클래스 표현식
let Tutor = class {
  teach() {
    console.log('이해 하셨나요??');
  }
};

new Tutor().teach();


// 2. 기명 클래스 표현식
let Tutee = class MyTutee {
  learn() {
    console.log(this instanceof MyTutee); // true
    console.log('우와 이해했어요!');
  }
};

new Tutee().learn();
// new MyTutee().learn(); // ReferenceError: MyTutee is not defined (MyTutee는 클래스 내부에서만 유효한 식별자)



// 3. 클래스 동적 생성
// - 함수가 클래스를 반환하게 함으로써 동적으로 클래스를 생성할 수 있습니다.
function makeTutee(message) {
  return class {
    feedback() {
      console.log(message);
    }
  };
}

let SecondTutee = makeTutee('이해가 쏙쏙됩니다');
new SecondTutee().feedback();


/**
 * 결론:
 * 클래스 표현식 정의가 가능하다는 것은
 * 함수처럼 클래스도 "일급 객체"라는 의미입니다.
 * 즉, 변수에 할당하기, 함수에 전달하기, 함수에서 반환하기 등이 가능합니다.
 */