/*
    Write a program using ternary operator:

    if num > 0, return string "positive"
    if num < 0, return string "negative"
    if num === 0, reuturn string "zero";
*/

function testFunc(num)
{
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
    //if the first condition is false, in the false statement, embed another ternary operator
}

console.log(testFunc(0));