/*
    What if there are identical outputs (considering there are multiple inputs)?
    - just remove the break statement
*/

function testFunc(val)
{
    var answer = "";
    switch(val)
    {
        case 1:
        case 2:
        case 3: 
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "high";
            break;
    }
    return answer;
}

console.log(testFunc(7));