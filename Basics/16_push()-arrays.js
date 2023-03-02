/*
    push()
     - appends data to the end of the array


     syntax: arrExample.push([last]);

     arrExample - the existing array
     [last] - the element we want to put in the last index of the array
     .push() - appends the data ([last] in this case) to the end of the array

     */

var myArray = [["Shannen", 20], ["Clint", 21]];

console.log("\nBefore using the push() function: " + myArray);
myArray.push(["Booters", 1]);

console.log("After using the push() function: " +  myArray + "\n");