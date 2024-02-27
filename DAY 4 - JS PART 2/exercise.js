function checkEvenOrOdd(number){
    if (number % 2 == 0){
        return "even";
    } else{
        return "odd";
    }
}

let num1 = 2;
let num2 = 3;
console.log(`${num1} is an ${checkEvenOrOdd(num1)} number.`)
console.log(`${num2} is an ${checkEvenOrOdd(num2)} number.`)