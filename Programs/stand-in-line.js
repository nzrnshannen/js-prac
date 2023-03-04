/*
    queue
    - an abstract data structure
    - it is where items are kept in order
*/

function nextInLine(arr, item)
{

    /*
        TAKENOTE
        .push() = puts the element to the end of the array
        .shift() = removes the first element in the array.
                 * there should be something that could hold this value*
    */
    arr.push(item); //item = 6 is now inserted in the array
    //testArr = [1, 2, 3, 4, 5, 6]
    return arr.shift();
    //array after arr.shift() = [2, 3, 4, 5, 6]
    //return value is 1
}

var testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); //function will return 1; hence, 1 is printed here
console.log("After: " + JSON.stringify(testArr));

/*
    JSON.stringify(arrHere)
        - changes an array into a string
*/