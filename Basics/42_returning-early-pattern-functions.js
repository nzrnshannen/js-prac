/*
    Note:
    1. You can leave the function anytime with a return statement
    2. Return statements are not always at the end of the function

*/

function abTest(a, b)
{
    if(a<0 || b<0)
    {
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(-2, 2));