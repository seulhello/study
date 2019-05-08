let superObj = {
    superVal:'super'
}

// let subObj = {
//     subVal: 'sub'
// }

// subObj.__proto__ = superObj;

//superObj를 부모로하는 새로운 객체를 만들어! [__prot__]의 대체제
let subObj = Object.create(superObj);

// 상단에 주석처리한 sub 객체를 만드는 것이 하단의 코드와 동일 하다
subObj.subVal = 'sub'
// debugger란 자바스크립트의 실행을 일시중지 시킬수 있는 아이
// 해당 js 가 해당되는 html (현재기준 hello html)을 브라우저에서 실행시킨후 sources 창을 열고 reload를 하면 좌측에 내가 정의한 객체에대한 자세한 정보가 나열되어있다.
// watch에 내가 원하는 객체 명을 입력해서 찾을 수도 있다. watch에 subObj를 살펴보면 __proto__ 가 super를 가르키고있는것을 확인할수 있다.
//console창에 subObj.__proto__ === superObj 를 쳐보면 true 값을 받아오는 것을 확인 할 수 있다.

debugger;
console.log(superObj);
console.log(subObj);

console.log('subObj.subVal ==>',subObj.subVal);
console.log('subObj.superVal ==>',subObj.superVal);


subObj.superVal = 'change';

console.log('superObj.superVal ==>',superObj.superVal);
console.log('subObj.superVal ==>',subObj.superVal);

