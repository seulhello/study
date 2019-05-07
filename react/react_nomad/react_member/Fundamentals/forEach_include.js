let posts = ["Hi","Hello","Bye"];

posts.forEach(post => console.log(post));       //forEach 같은 경우 각각하나에서 작동하는 것은 map과 filter와 비슷하지만 배열로 저장하지않는다. 그래서 로컬스토리지에 저장하거나 api저장, db 저장과같은 경우에 쓰인다.

posts.push("new");              //push를 사용하면 해당 배열에 맨 마지막에 내가 원하는 내용이 추가 된다.

console.log(posts);

if(!posts.includes("suup")){        //includes는 내가 원하는 내용이 포함되어있나 체크하는 방법이다.
    posts.push("suup");
}

console.log(posts);