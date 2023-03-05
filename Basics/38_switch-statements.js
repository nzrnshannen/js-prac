//switch statements
    //- instead of using a chain of if-else statements

function testFunc(val)
{
    var answer = "";
    switch(val) //acts like strict equality operator
    {
        case 1: 
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3: 
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;

    }

    return answer;
}


console.log(testFunc(2));


//using the default option 
    // - acts like else


function anotherFunc(val)
{
    var answer = "";
    switch(val)
    {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
        case "c":
            answer = "cat";
            break;
        default: //acts like else
            answer = "Stuff";
            break;
    }

    return answer;
}

console.log(anotherFunc("z"));