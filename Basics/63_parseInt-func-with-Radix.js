/*
    parseInt()
        - can be used for converting a string to number
    
    Syntax:
        parseInt(string-here, base-of-the-string);
    
        NOTE:
         We need to put its base so that the program will know
         its original type before it can convert.
*/

function convertToInteger(str)
{
    return parseInt(str, 2);
    //2 - base 2 binary
    //8 - base 8 octal
    //10 - base 10 decimal
}

var output = convertToInteger("10011");

console.log(output);