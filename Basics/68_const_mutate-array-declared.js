const s = [5, 7, 2];
function testFunc()
{
    "use strict";

    //this will cause an error:
    //s = [2, 5, 7];


    //this will NOT cause an error if we're using a bracket notation
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}

testFunc();

console.log("New Array: ", s);