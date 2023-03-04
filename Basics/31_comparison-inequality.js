/*
    inequality ( != ) operator
    - checks if two values are not equal.

*/

function testFunc(val)
{
    if(val!= 99)
    {
        return "Yes, they are not equal!";
    }
    return "No, they're equal!";
}

console.log(testFunc(10));