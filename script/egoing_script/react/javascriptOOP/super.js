class Person{
    constructor(name,f_num,s_num){
        this.name = name;
        this.first = f_num;
        this.second = s_num;
    }
    sum(){
        return this.first + this.second;
    }
}

class PersonPlus extends Person{
    constructor(name,f_num,s_num,t_num){
        // this.name = name;
        // this.first = f_num;
        // this.second = s_num;
        // 상단의 내용을 상속받고 싶을때에는 super를 사용한다.

        // super에 괄호가 있으면 부모클래스의 생성자 
        super(name,f_num,s_num);
        this.third = t_num;
    }
    sum(){
        // super에 괄호가 없으면 부모클래스 그 차체를 의미한다.
        return super.sum() + this.third;
    }
}

let kim = new PersonPlus('kim',10,50,70);
console.log(kim.sum());