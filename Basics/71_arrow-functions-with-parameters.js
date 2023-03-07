
/*
    INSTEAD OF THIS CODE:
    var testFunc = function(arr1, arr2){
        return arr1.concat(arr2);
    }

    use this instead: 
*/


const testFunc = (arr1, arr2) => arr1.concat(arr2);

console.log(testFunc([1, 2], [3, 4, 5]));
