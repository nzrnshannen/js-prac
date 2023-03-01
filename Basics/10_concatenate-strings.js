var finalStr = "First string, " + "second string.\n";

console.log(finalStr);

//using += operator:
var ourStr = "I come first. ";
ourStr += "I come second.\n"; //ourStr = ourStr + "I come second.";

var myStr = "This is the first sentence. ";
myStr+= "This is the second sentence.\n";

console.log(myStr);


//constructing strings using variables:
var myName = "Shannen";
var fullName = "Hello, my name is " + myName + " and I love to code.\n";

console.log(fullName);


//appending string variables
var anAdjective = "BS Information Systems student.\n";
var ourStr = "I am a ";
ourStr += anAdjective;
console.log(ourStr);