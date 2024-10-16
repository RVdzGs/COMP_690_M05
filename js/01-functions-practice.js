// Practice with Functions

/*
1. Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".
*/
function halfNumber(num) {
    const half = num / 2;
    console.log(`Half of ${num} is ${half}.`);
    return half;
}

// Example:
halfNumber(7); // Logs: "Half of 7 is 3.5."
/*
2. Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
*/
function squareNumber(num) {
    const squared = num * num;
    console.log(`The result of squaring the number ${num} is ${squared}.`);
    return squared;
}

// Example:
squareNumber(9); // Logs: "The result of squaring the number 9 is 81."
/*
3. Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number, and return the result. It should log a string like "2 is 50% of 4."
*/
function percentOf(num1, num2) {
    const percent = (num1 / num2) * 100;
    console.log(`${num1} is ${percent}% of ${num2}.`);
    return percent;
}

// Example:
percentOf(9, 12); // Logs: "9 is 75% of 12."
/*
4. Write a function called findModulus() that accepts two numbers. Within the function write a statement that returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."
*/
function findModulus(num1, num2) {
    const modulus = num1 % num2;
    console.log(`${modulus} is the modulus of ${num1} and ${num2}.`);
    return modulus;
}

// Example:
findModulus(4, 10); // Logs: "4 is the modulus of 4 and 10."

