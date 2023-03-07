/*
    Tips:
    1. use CAPITAL-LETTERS for declaraing CONST variables
    2. In making your own program/s, it is guaranteed to use let and const
        keywords instead of var
*/

function testFunc(str)
{
    "use strict";

    const SENTENCE = str + " is cool!"; //this is read-only
    //^^ this was its first original value

    //after reassigning, it will cause an ERROR:
   // sentence = str + " is amazing!";


    for(let i =0; i<str.length; i+=2)
    {
        console.log(SENTENCE);
    }

}

testFunc("test string");