// arrowFunction과 일반 function의 this 차이를 이해해보자
const kim = {
    name:'kim',
    first: 20,
    second: 50,
    sum : function(){
        return this.first + this.second
    }
}

console.log(kim.sum());

