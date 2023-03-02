/*
    pop()
    - for removing an item 
    - will remove the last element in the array by default in using this function

    syntax: var newArray = oldArray.pop();
    explanation:
        The last element of the oldArray will be removed. The removed content
        of the oldArray is stored in the newArray.

*/

var myArray = [["Shannen", 20], ["Clint", 21]];

var removedFromArr = myArray.pop();

console.log("Updated array: " + myArray);
console.log("Removed element: " + removedFromArr);