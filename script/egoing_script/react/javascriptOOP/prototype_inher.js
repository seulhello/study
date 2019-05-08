let superObj = {
    superVal:'super'
}

let subObj = {
    subVal: 'sub'
}

subObj.__proto__ = superObj;

console.log('subObj.subVal ==>',subObj.subVal);
console.log('subObj.superVal ==>',subObj.superVal);

//prototype와 __proto__ 차이 알기!


subObj.superVal = 'change';

console.log('superObj.superVal ==>',superObj.superVal);
console.log('subObj.superVal ==>',subObj.superVal);

