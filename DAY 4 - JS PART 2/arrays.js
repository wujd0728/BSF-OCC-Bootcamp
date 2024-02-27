// Topic: Introduction to Arrays

//creating an array
let characters = ["Pippin", "Goku", "Layla", "Morgana", "Aang"];

//accessing array elements
console.log("character 2: ", characters[1])
console.log("character 5: ", characters[4])
console.log("The last character: ", characters[characters.length -1])

//modifying array elements
characters.push("sasuke");
characters.pop();
characters[0] = "crybaby";
console.log("Modified Array: ", characters);

//Array Iteration
for (let i =0; i < characters.length; i++){
    console.log("Character", i+1, characters[i])
}

characters.forEach(function(character){
    console.log(character)
})

// Array Methods

//Indexof
console.log(characters.indexOf("Layla"));

//includes
console.log("Includes a value: ", characters.includes("Goku"));

//join
console.log("joined array: ", characters.join(" - "))

//slice
let slicedArray = characters.slice(1,4);
console.log("sliced array: ", slicedArray)

//splice
let removedElements = characters.splice(0, 2);
console.log("removed elements: ", removedElements)
console.log("updated array: ", characters)