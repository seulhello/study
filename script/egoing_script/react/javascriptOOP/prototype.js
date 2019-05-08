function Person(name,f_num,s_num){
    this.name = name;
    this.first = f_num;
    this.second = s_num;
}

// 기본적인 sum 은 프로토 타입으로 정의 된 부분이 중심이 되어 따로 추가로 정의 하지 않으면 prototype에 적용된 sum함수가 적용된다.

Person.prototype.sum = function(){
    return "변경: "+ (this.first + this.second);
}

let kim = new Person('kim', 10 ,20);
// kim부분에만 다른 함수를 적용하고 싶으면 따로 아래와 같이 적용 시킬수 있다
kim.sum = function(){
    return `this:`+(this.first+this.second);
}
let lee = new Person('lee', 5 , 5);

console.log(kim.sum());         //kim 부분은 위에 새로 정의한 this : 결과로 나온다
console.log(lee.sum());         //lee 같은 경우 상단에 prototype 로 정의된 함수가 적용 되어 결과가 나온다. lee 라는 객체는 자신에게 sum이 정의 되어 있지 않으면 prototype sum 을 찾아낸다.

// prototype이란 어떤의미가 있는가?
// 기본으로 내가 정의할 수 있는 해당객체의 디폴트 값
//  prototype가 없으면 하나하나 객체에 변경값을 입력해 주어야 한다.