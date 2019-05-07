const numbers= [1,34234,234,1,34,234,2435,2345,2346,41,6,57,356,456,456,1233445356,45768,57,56735,134,1,1,23,45,5,555,0];

const smallerThen = numbers.filter(smaller => {
    console.log(smaller);
    return smaller < 50
});         //filter의 역할은 map 과 비슷하다 단 배열전체를 포함하는것이 아닌 내가 원하는 조건에 따라 배열을 걸러내서 새로운 배열을 만들어냄 (예제 조건은 numbers 숫자가 50보다 작을 경우)

console.log(smallerThen);