/*
    HOW TO DELETE A PROPERTY?
    Take note:
     - Make sure that the property already existed! -

     Syntax:
     - use the delete keyword: delete object-name-here.property-name
    example:
        studentData.name;


*/

var testObj = {
    "name": "Saneem",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "color": "brown"
};

delete testObj.color;

console.log(testObj.color); //will show undefined

