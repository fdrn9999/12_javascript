// 일반 for문 (java와 유사함)
for (let i = 0; i < 5; i++) {
  console.log(i);
}

const student = {
  name: '유관순',
  age: 16,
  getInfo() {
    console.log(`${this.name}(은)는 ${this.age}세입니다.`);
  },
};

for (const key in student) {
  console.log(`key : ${key}`);
  console.log(`student.key : ${student.key}`); // undefined
  console.log(`student[key] : ${student[key]}`); // 유관순
}
