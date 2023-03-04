/*
    equality ( == ) operator
        - for comparing two objects
    
    Q: Why don't we just use ( = )?
    A: Remember, = is for ASSIGNING like:
        var num = 16
        const str = "Hello!"
        So, ( = ) can't be used for comparison.
*/

function testEqual(val)
{
    if(val == 12) //10 == 12 IS FALSE; 10 and 12 are not equal so the code inside if statement won't be executed
    {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));