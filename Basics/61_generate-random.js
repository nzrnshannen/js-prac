
//generate random fraction
function randomFraction()
{
    return Math.random();
}

console.log(randomFraction());

//generate random whole number
var randomNumberBetween0and19 = Math.floor(Math.random()*20);

function randomFunc()
{
    return Math.floor(Math.random() * 10); //numbers are between 0 and 9
}

console.log(randomFunc());

/*
    RANDOM FRACTION: Math.random(); <--- starts with 0
    RANDOM WHOLE NUMBER Math.floor(Math.random()*10) <--- from 0 to 9
            -- 1. Math.random() * 10 <--- fraction numbers ranging from 0 to 9
            -- 2. Math.floor() <-- the fraction number coming from Math.random() would be rounded, resulting to a whole number 
                                    as the output

*/

