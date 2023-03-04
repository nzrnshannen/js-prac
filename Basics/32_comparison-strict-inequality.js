/*
    strict inequality ( !== )
    - checks if two values and their data types are
      not the same
*/

function testFunc(val)
{
    if(val !== 17)
    {
        return "Not Equal";
    }
    return "Equal";
}

console.log(testFunc('17'));