//Inheritance

//Parent class

class Animal {
    constructor(name){
        this.name = name;
    } 

    eat() {
        console.log(`${this.name} is eating!`);
    }
}

//child class dog
class Dog extends Animal { //key word: extends
    bark(){
        console.log("woof woof!");
    }
}
//child class cat
class cat extends Animal {
    meow() {
        console.log("Meow, meow!")
    }
}

const myDog = new Dog("Lucky");
myDog.bark();
myDog.eat();

const myCat = new cat("Lucky");
myCat.meow();
myCat.eat();