const days = ["월","화","수","목","금"];

// const addDays1 = days.map(days => console.log(days));   <= 내가 map 한 배열 하나하나에 함수를 실행하여 그 결과로 새로운 배열을 만들어낸다. 각각의 배열을 결과 값으로 가진다. 
// 사용법 const 변수 = 원하는배열(예제에서는 days) day.map([내가 새로 만들 배열명] => 함수내용 ); 함수를 미리 만들어 map (함수) 이런식으로도 가능하다
// addDays1 console.log 결과
// 월
// 화
// 수
// 목
// 금
// 한줄에 다 나오는 것이 아닌 값 하나 하나의 결과가 나오는 것을 꼭 기억하자.
// console.log(addDays1)의 결과 days의 개수 만큼 => [undifined,undifined,undifined,undifined,undifined]
// 위에가 undefined 인 이유 return 값이 없기 때문에 
// map 안에 함수에 console.log를 지우고 days (return 값을 주면)로하면 ["월","화","수","목","금"] 이런식으로 배열로 결과를 나타냄 

const addDays2 = (day,index) => `#${index}: ${day}` 

let addDays = days.map(week => {
    console.log(week);
    return `요일 :${week}`
});

console.log(addDays);

addDays = days.map(addDays2);

console.log(addDays)




