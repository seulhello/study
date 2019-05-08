// prototype 코드를 class 로 동작하도록 만들어 볼것이다. 

// 객체의 초기화란? 무엇인가 알아보기

class Person{
    // constructor 는 약속된 이름이다 변경이 불가능하다 해당함수는 객체가 생성되면서 만들어지는 함수 이다. 
    constructor(name,f_num,s_num){
        console.log('객체생성 이전에 발생');
        this.name = name;
        this.first = f_num;
        this.second = s_num;
    }
    sum(){
        return "prototype: "+ (this.first + this.second);
    }
}
// extends를 사용하면 personPlus가 person을 상속받아서 person의 내용도 PersonPlus에서도 사용이 가능하다
class PersonPlus extends Person{
    avg(){
        return (this.first+this.second);
    }
}

// let kim = new Person('kim',10,50);
// console.log(kim);

// kim.sum = function(){
//     return `this: `+ (this.first+this.second);
// }

// let lee = new Person('lee',30,50);
// console.log(lee);
// console.log(kim.sum());
// console.log(lee.sum());

let kim =  new PersonPlus('kim',10,20);
console.log(kim.avg());
console.log(kim.sum());
