var ourArray = [];

for (var i=0; i<10; i+=2) //for even numbers
{
    ourArray.push(i);
}

console.log(ourArray);

var myArray = [];

for(var i=1; i<20; i++) 
{
    myArray.push(2*i-1); //for odd numbers
}

console.log(myArray);

//second program for odd numbers

var testArr = [];
for(var i=1; i<20; i+=2) //start with 1 instead of 0
{
    testArr.push(i);
}

console.log(testArr);