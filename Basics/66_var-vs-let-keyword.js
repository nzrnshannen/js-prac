/*
    var keyword
        - lets you redeclare the same variable without causing any errors
        - redeclaration will cause an error on both const and let keywords
*/

var testingVar = "test string";
var testingVar = "another test string"; //this will be the new value of testingVar
console.log("testing var: ", testingVar);

let testinglet = "Shannen";
//let testinglet = "Nazareno" <---- would cause an error
testinglet = "Nazareno"; //would not cause an error

/*==============================================================================
    "use strict"
        - enables strict mode which catches coding mistakes and unsafe actions
        - usually put in the top of the .js file or in a function
==============================================================================+*/
function testFunc()
{
    "use strict";
}

testFunc();



/*=============================================================================
    SCOPES OF VAR AND LET SCOPE
    1. When you declare a variable with var, it is declared GLOBALY or LOCALLY if 
        declared inside a function
    2. The scope of let on the otherhand is limited to the block statement or 
        expression that it was declared in
================================================================================*/

function checkScope()
{
    "use strict";

    //var i = "function scope"; //this was the first value of i
    if(true)
    {
        var i = "block scope"; //the value of i is changed globally, affecting its first value
        console.log("Block scope i is: ", i); 
    }
    console.log("Function scope i is: ", i); //even if we commented out the var i, since it's var, it can be access all throughout the function
    return i;
}

checkScope();

//see example below about let 
function checkTest()
{
    "use strict";
    let j = "function scope";
    if(true)
    {
        //don't use j 
        //use let j
        let j = "block scope"; //this is not redeclaration, you are in a different BLOCK scope
        //it looks like redeclaration, but mind that the let j outside is diffrent from the let j inside
        //this explains why it did not cause any errors
        console.log("Block scope j is: ", j);
    }
    console.log("Function scope j is: ", j)
}

checkTest();