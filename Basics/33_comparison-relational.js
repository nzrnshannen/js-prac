function testFunc(val)
{
    if(val>100)
    {
        return "Over 100";
    }

    if(val > 10)
    {
        return "Over 10";
    }

    return "10 or under";
}

console.log(testFunc(10));


function testGreaterOrEqual(num)
{
    if(num>=20)
    {
        return "20 or over";
    }

    if(num>=10)
    {
        return "10 or over";
    }

    return "Less than 10";
}

console.log(testGreaterOrEqual(9));


function testLessThan(val2)
{
    if(val2< 25)
    {
        return "Under 25";
    }
    
    if(val2 < 55)
    {
        return "Under 55";
    }
}

console.log(testLessThan(10));

function testLessOrEqual(val)
{
    if(val<=12)
    {
        return "Smaller than or equal to 12";
    }

    if(val<=24)
    {
        return "Smaller than or equal to 24";
    }

    return "More than 24";
}

console.log(testLessOrEqual(10));