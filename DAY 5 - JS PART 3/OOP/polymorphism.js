//Polymorphism

class Animal{
    makeSound() {
        return "The animal makes a noise!"
    }
}

class Dog extends Animal {
    makeSound() {
        return super.makeSound() + " " + "I heard a dog bark!"// key word: super
    }
}

class Cat extends Animal {
    makeSound() {
        return super.makeSound() + " " + "I heard a cat meow!"// key word: super
    }
}
const myDog = new Dog();
console.log(myDog.makeSound());
const myCat = new Cat();
console.log(myCat.makeSound());