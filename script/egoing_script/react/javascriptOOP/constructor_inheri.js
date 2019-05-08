function Person(name, f_num, s_num){
    this.name = name;
    this.first = f_num;
    this.second = s_num;
}

Person.prototype.sum = function(){
    return this.first + this.second;
}

function PersonPlus(name, f_num, s_num, t_num){
    Person.call(this,name,f_num,s_num);
    this.thrid = t_num;
}

// PersonPlus.prototype.__proto__ = Person.prototype;

PersonPlus.prototype = Object.create(Person.prototype);
//여기까지해서 personPlus의 prototype을 새로 선언하면 기존에 있던 constructor는 person의 prototype를 따르게 된다. (기존에 있던것을 replayce 하게 되어버린다)
console.log(PersonPlus.prototype.constructor);
PersonPlus.prototype.constructor = PersonPlus;
//그래서 상단의 코드처럼 PersonPlus constructor를 명시해주는 것이 좋다.
console.log(PersonPlus.prototype.constructor);
/*
 Object.create(Person.prototype); 
 ==> Person.prototype 이라는 객체를 __proto__로 하는 새로운 객체를 생성한다.
*/

// 하지만 PersonPlus.prototype.__proto__ = Person.prototype; 이방식은 기존에 있는 것을 그대로 두고 추가하는? 역할을 한다. 그러나 __proto__ 는 비표준이다. 되도록이면 상단의 방법을 사용한다 
//되도록이면 class를 사용하자 코드의 가성비는 떨어진다.

PersonPlus.prototype.avg = function(){
    return (this.first+this.second+this.thrid)/3;
}

let kim = new PersonPlus('kim',10,20,30);
console.log("kim.sum() ", kim.sum());
console.log("kim.avg() ", kim.avg());
console.log('kim.constructor', kim.constructor);
