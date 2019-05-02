const human = {
    firstName: "seulhee",
    lastName: "yi",
    hobby: "game",
    favFood:{
        like: "고기",
        hate: "오이"
    }
}


// 원래는 object를 불러 오려면 
// const firstName = human.first 이런식으로 해야한다 
// 그러나 Destructuring을 사용하면 

const {firstName,  lastName, hobby: ho, favFood: { like, hate } } = human;      //obj가 어디서 오는지 알려주어야한다

console.log(firstName);     // firstName 변수에는 "seulhee"가 들어간다
console.log(ho);            // Destructuring에서 hobby : ho 하면 ho로 변수명을 변경한다는 의미가 들어간다.
console.log(top,last);      //obj 내부에 obj를 불러오려면 favFood: {top,last} 식으로 선언한다


