const person = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    hobbies: ["reading", "coding", "hiking"],

    greet: function (){
        console.log("Hello, my name is", this.firstName)
    }

}
//call attributes and methods
console.log(person.firstName);
console.log(person.age);
person.greet();

//change value of attributes
person.lastName = "Smith";
console.log(person.lastName);

//add new attributes
person.nationality = "American";
console.log(person.nationality);

//add new function
person.introduce = function(){
    console.log(`I am ${this.firstName} ${this.lastName}. I am ${this.age} years old.`)
}
person.introduce()

//nesting objects
const address = {
    street: "123 Main st",
    city: "San Francisco",
    Country: "USA"
}

person.homeAddress = address;
console.log(person.homeAddress.street)

//Object Destructuring
const {firstName, lastName, age} = person;
console.log(firstName)