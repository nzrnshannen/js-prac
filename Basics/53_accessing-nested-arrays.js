var myPlants = [
    { //myPlants[0]
        type: "flowers", //myPlants[0].type
        list:[ //myPlants[0].list[n]
            "rose", //myPlants[0].list[0];
            "tulip", //myPlants[0].list[1];
            "dandelion" //myPlants[0].list[2];
        ]
    },

    {//myPlants[1]
        type: "trees",  //myPlants[1].type
        list: [  //myPlants[1].list[n]
            "fir", //myPlants[1].list[0];
            "pine", //myPlants[1].list[1];
            "birch" //myPlants[1].list[2];
        ]
    }
];

var output = myPlants[1].list[0];
console.log(output); //fir


