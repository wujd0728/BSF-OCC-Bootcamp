//Synchronous Operation
/*
console.log('First');
console.log('Second');
console.log('Third');
*/

//Asynchronous Programming

console.log('First');
setTimeout(() =>{
    console.log('second')
                }, 1000) //unit = ms
console.log('Third');
//the output is First Third --after 5s, second