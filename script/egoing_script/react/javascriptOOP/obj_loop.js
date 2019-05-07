const memberArray = ['siri', 'star', 'galo'];

console.group('array loop');

for(var i =0; i < memberArray.length;i++){
    console.log(i,memberArray[i]);
}

console.groupEnd('array loop');


const memberObj ={
    manager: 'siri',
    designer: 'star',
    chicken: 'galo'
}

console.group('obj loop');

//객체를 사용했을때 반복문은 for in 문 이다    
// for(var 반복될 객체의 이름[임의로 내가 지정 예제에서는 potato 라고 함] in 반복될 obj이름) 
//potato에 저장된 값은 obj의 key값이다. 
//key에 해당하는 값을 불러오고싶으면 객체변수[속성의변수] 예제에서는 memberObj[potato]

for(var potato in memberObj){
    console.log(potato, memberObj[potato]);
}              


console.groupEnd('obj loop');
