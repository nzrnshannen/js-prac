var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for(var i=0; i<ourArr.length; i++)
{
    ourTotal+=ourArr[i];
}

console.log(ourTotal);


var testArr = [2, 3, 4, 5, 6];
var testTotal = 0;

for(var i=0; i<testArr.length; i++) //testArr.length = 5
{
    //loop runs from i = 0; 0<5
    testTotal+= testArr[i];
}

console.log(testTotal);