//while loop

var myArray = [];

var i =0;
while(i<5)
{
    myArray.push(i);
    i++;
}


console.log(myArray);


/*

1. i = 0; (0<5)

    [CONDITION IS SATISFIED]


    myArray.push(0)

    myArray = [0];
    i++ <-- i = 1;

    -----

2. i = 1; (1<5)

    [CONDITION IS SATISFIED]


    myArray.push(1)

    myArray = [0, 1];
    i++ <-- i = 2;

    -----

3. i = 2; (2<5)

    [CONDITION IS SATISFIED]

    myArray.push(2)

    myArray = [0, 1, 2];
    i++ <-- i = 3

    -----

4. i = 3; (3<5)

    [CONDITION IS SATISFIED]

    myArray.push(3)

    myArray = [0, 1, 2, 3];
    i++ <-- i = 4

    ------

5. i = 4; (4<5)

    [CONDITION IS SATISFIED]

    myArray.push(4)
    
    myArray = [0, 1, 2, 3, 4];
    i++ <-- i = 5


6. i = 5; (5<5) 

    [CONDITION NOT SATISFIED]
    [EXIT FROM LOOP]

*/