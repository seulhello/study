// 만약 세번째 점수가 들어가야한다면 kim 뿐만아니라 lee 까지 수정해야하는 상황이 생겨난다 한두개가 아닌 무수히 많은 코드라면 힘들기때문에 constructor(생성자)를 사용한다.
//native code = 내장된 내용이다.

// const kim = {
//     name:'kim',
//     first: 20,
//     second: 50,
//     sum : function(){
//         return this.first + this.second
//     }
// }

// const lee = {
//     name:'lee',
//     first: 50,
//     second: 50,
//     sum : function(){
//         return this.first + this.second
//     }
// }

// console.log(kim.sum());
// console.log(lee.sum());

// function Person(){
//     this.name = 'lee';
//     this.first = 50;
//     this.second = 50;
//     this.sum = function(){
//         return this.first + this.second
//     }
// }

// console.log(Person());
// console.log(new Person());

// const day01 = new Date();
// console.log(day01.getFullYear());



// Date 같은 함수를 만들어 보자! 
function Person(name,f_num,s_num){
    this.name = name;
    this.first = f_num;
    this.second = s_num;
    this.sum = function(){
        return this.first + this.second
    }
}

let kim = new Person('kim',10,20);
let lee = new Person('lee',5,5);

console.log(kim,kim.sum());
console.log(lee,lee.sum());