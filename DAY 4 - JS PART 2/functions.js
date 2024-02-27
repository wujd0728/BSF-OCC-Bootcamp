//Functions - Allows us to write reusable block of codes and also provide ways to organize and structure code

//declaing a function
function greet(){
    console.log("Hello to the world of functions!")
}

//calling a function
greet();


//function declaration - Can be hoisted
function functionDeclaration(){
    console.log("Hello! I am a function declaration!")
}

functionDeclaration();

//function expression - can not be hoisted, more controllable

const functionExpression = function(){
    console.log("Hello! I am a function Expression!")
};

functionExpression();


//functions with parameters
function greetme(name){
    console.log("Hello", name + "!")
}
greetme("Regel")

//functions with a return value
function sum(a, b){
    console.log("I am printed before the returned value");
    return a + b;//Return marks the end of the code block
    console.log("I am printed after the returned value");//muted /unreachable code
}
console.log("The sum of a and b is", sum(10, 20));