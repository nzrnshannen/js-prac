function testFunc(val)
{
    var answer = "";
    switch(val)
    {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much";
            break;
        case 7:
            answer = "ate nine";
            break;
    }

    return answer;
}

console.log(testFunc("bob"));