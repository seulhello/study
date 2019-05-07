class Human {
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }
}

// const seul = new Human("seul", "yi");

// console.log(seul);

class Baby extends Human{
    cry(){
        console.log('Waaaaaaaa');
    }
    sayName(){
        console.log(`My name is ${this.name}`);
        console.log(this);
    }
}

const myBaby = new Baby('mini','me');
console.log(myBaby);
console.log(myBaby.cry());
console.log(myBaby.sayName());