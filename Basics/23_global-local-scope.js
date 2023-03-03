var outerWear = "T-Shirt";

function myOutfit()
{
    var outerWear = "sweater"; //local outerWear has higher precedence than the global one
    return outerWear;
}

console.log(myOutfit()); //will print sweater
console.log(outerWear); //will print tshirt since the outerWear inside the function is not visible outside