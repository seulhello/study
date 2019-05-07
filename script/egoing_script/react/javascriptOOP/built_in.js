//내가 정의하지 않아도 미리 만들어져 놓은 객체 or 함수
//Math 라는 객체를 만들어 안에 다양한 기능들을 저장해 놓았다
console.log(Math.PI);
console.log(Math.random());     //method
console.log(Math.floor(3.9)); 

// 알아서 짠 코드라고 상상해본다

console.group('myMath');
const MyMath = {
    PI:Math.PI,
    random: () => Math.random() * 5,
    floor: (val) => Math.floor(val),
}
console.groupEnd('myMath');


console.log(MyMath.PI);
console.log(MyMath.random());
console.log(MyMath.floor(MyMath.random()));