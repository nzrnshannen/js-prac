/*
    SYNTAX:
        condition ?  statement-if-true : statement-if-false;
*/


function testFunc(x, y)
{
    return x === y ? true : false;
}

console.log(testFunc(1, 2));