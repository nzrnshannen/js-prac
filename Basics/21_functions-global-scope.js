var myGlobal = 10; //global variable

function fun1()
{
    oopsGlobal = 5; //not putting the var keyword means this is also global
}

function fun2()
{
    var output = "";
    if(typeof myGlobal != "undefined")
    {
        output+="myGlobal: " + myGlobal;
    }

    if(typeof oopsGlobal != "undefined")
    {
        output+= "\noopsGlobal: " + oopsGlobal;
    }

    console.log(output);
}

fun1();
fun2();