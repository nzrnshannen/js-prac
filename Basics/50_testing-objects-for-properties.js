/*
    Q: How to check if an object has a property?
    A: Use to .hasOwnProperty

    Syntax:

    existing-object.hasOwnProperty(property-name-to-be-checked)


*/


var testObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp)
{
    if (testObj.hasOwnProperty(checkProp))
    {
        return testObj[checkProp];
    }
    else
    {
        return "Not Found!";
    }
}

//console.log(checkObj("hello"));

var objExample = {
    "name": "Shannen",
    "age": 20,
    "favorite color": "blue",
    "roll number": 7
};

function testFunc(checkAvailability)
{
    if(objExample.hasOwnProperty(checkAvailability)==true)
    {
        return "Property has been found!\n";
    }
    else
    {
        return "Property cannot be found!\n";
    }
}

console.log(testFunc("favorite color"));