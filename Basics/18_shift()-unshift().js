/*
    shift()
    - removes the first element in the array
    
    syntax: var removedElement = existingArr.shift();
*/

var ourArray = ["Shannen", "Clint", "Buttercup"];

var removedElement = ourArray.shift();

console.log("The removed element: " + removedElement);
console.log("New array contents: " + ourArray);


/*
    unshift()
    - adds an elements to the beginning of the array

    syntax: existingArr.unshift("Happy")
    Description:
        The element "Happy" is now in the beginning of the array.
        This is now the first element of the array.
*/

ourArray.unshift("New first");

console.log("After using unshift(): " + ourArray);


//next example:

var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

myArray.unshift(["Paul", 35]);
const statement = "\n\nThe new array contents: ";
console.log(statement + myArray);