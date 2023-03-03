function fun1()
{
    var myVar = 5; //visible throughout fun1()
    //myVar = 5 <-- would print 5
    console.log(myVar);
}

fun1();

//console.log(myVar); <-- would cause any error