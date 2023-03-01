/*
    Data Types;

    undefined = something that is not yet defined
            ex. variable not assigned
    null = value equivalent to NOTHING
    boolen = true or false
    string
    symbol
    number
    object = store a lot of different key values

*/

var exampleName = "Shannen"; //exampleName is a string
exampleName = 8; //exampleName is now a number

let nickName = "Nen";
const pi = 3.14;  
//const pi = 5; <-- will cause an error
//pi = 7; <-- would also cause an error

console.log(pi);

/*
[function scope]
var
    - used throughout the whole program
    - can be redeclared
        example: var age = 5;
                 var age = 9;

[block scope]
let
    - within the scope
    - cannot be redeclared
const
    - same with let but its value can't be changed
*/