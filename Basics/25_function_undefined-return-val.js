var sum = 0;
function addThree()
{
    sum+=3;//local
}

function addFive()
{
    sum += 5; //local
}


//calculations made in the previous function won't be reflected
//we are just calling the function
//console.log() will print whatever the function addFive returns using the return statement
console.log(addFive()); 