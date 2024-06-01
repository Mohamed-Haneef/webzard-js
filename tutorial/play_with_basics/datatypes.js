/* 8 datatypes in JS

1. Number - (int and float etc)
2. Bigint - for numbers more than 15 digits
2. string - (array of characters)
3. boolean - (true or false)
4. undefined - (declared variable without a value)
5. null 
6. Object - (Dom objects, json lists etc)
7. Symbols - (Unique properties)

*/
// Numbers
let number1 = 12;  
console.log(typeof number1);  // Outputs: "number"
let number2 = 12.00;  
console.log(typeof number2);  // Outputs: "number"

// Bigint
let withoutBigInt = 111111111111111111111111;
console.log("Random rounded value: " + withoutBigInt);  // Outputs: somevalue close to '111111111111111111111111'

let bigInt = BigInt("11111111111111111111111111");
console.log("Given value: " + bigInt);  //Outputs: 11111111111111111111111

// Boolean
let bool = true;
console.log(typeof bool);  // Outputs: "boolean"

// Undefined
let undef;
console.log(typeof undef);  // Outputs: "undefined"

let undef1 = undefined;
console.log(typeof undef1);  // Outputs: "undefined"

// Null
let nullobj = null;
console.log(typeof nullobj);  // Outputs: "object" (this is a known quirk in JavaScript)

// Object
let object =  {firstName:"Webzard", lastName:"js"};
console.log(typeof object);  // Outputs: "object"

// Symbol
let mySymbol = Symbol("webzard");
console.log(typeof mySymbol);  // Outputs: "symbol"

// Symbols are often used as unique property keys for objects
let symbolKey = Symbol("webzard");

let myObject = {
    [symbolKey]: "Key of the given symbol"
};

console.log(myObject[symbolKey]);  // Outputs: "value associated with symbolKey"



