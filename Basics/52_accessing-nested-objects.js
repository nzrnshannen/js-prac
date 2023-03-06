var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },

        "outside": {
            "trunk": "jack"
        }
    }
}


/*
    Properties inside of "car" --> "inside", "outside" 
    
    "inside" CAR AND ITS PROPERTIES
        Properties of "inside" --> "glove box", "Passenger seat"
        ACCESS "glove box" value = myStorage.car.inside.["glove box"];
        ACCESS "passenger seat" value = myStorage.car.inside.["passenger seat"];
        -------
    "outside" VAR AND ITS PROPERTIES
        Properties of "outside" --> "trunk";
        ACCESSS "trunk" value = myStorage.car.outside.trunk;

*/
var gloveBoxContents = myStorage.car.outside.trunk;

console.log(gloveBoxContents);

