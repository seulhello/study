let kim = {
    name:'kim',
    first: 10,
    second: 20 
}

let lee = {
    name:'lee',
    first: 40,
    second: 20 
}

function sum(prefix){
    return prefix +(this.first + this.second);
}
// 함수는 call 이라는 메소드를 가지고 있다.
// call은 인자를 받을 수 있다.
// 첫번째로는 해당 함수의 this를 누구로 할것인가 
// sum.call(kim)같은경우 나는 sum이라는 함수의 this를 kim으로 설정한다 
// 두번째 값부터는 내가 원하는 곳으로 파라미터 값이 들어간다. 

//apply 와 비슷 하다.

console.log('sum.call(kim)',sum.call(kim, '=> '));
console.log('sum.call(lee)',sum.call(lee , ': '));

// bind란? 
// 영구적으로 함수의 this값을(새로운 함수를 만들어서) 설정한다.

var kimSum = sum.bind(kim,'-> ');
console.log('kimSum',kimSum());


console.log(sum.call(this));

