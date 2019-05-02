const days = ["월","화","수"];
const otherDays = ["목","금","토"];

let allDays = [days + otherDays];
console.log(allDays);      //여기서 console.log해서 나온 것들은 배열이 아닌 단순한 string 이기때문에 allDays[4]가 불가능하다.


allDays = [days , otherDays];       
console.log(allDays);       //이런식으로 하면 allDays를 배열로 인식한다. 그러나 [Array[3], Array[3]] 이런식으로 인식해버린다.

allDays = [...days, ...otherDays]
console.log(allDays);        // '...' <- three dots 를 사용하면 Array가 아닌 해당 배열의 값을 가져온다. 배열 뿐만 아니라 obj에서도 동작한다.
