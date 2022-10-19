// Create a new function that converts gallons
// to liters


// function declaration
function convertToLiters(gallons){
    return gallons * 3.785;
}
console.log(convertToLiters(10));

/*

// function expression
const convertToLiters = function(gallons){
    return gallons * 3.785;
}
console.log(convertToLiters(10));
 */

/*
// arrow function
const convertToLiters = gallons => gallons * 3.785;
console.log(convertToLiters(10));
 */

/*

// function constructor
const convertToLiters = new Function("gallons", 'return gallons * 3.785;');
console.log(convertToLiters(10));
 */




