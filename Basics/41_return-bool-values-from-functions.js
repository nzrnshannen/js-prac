function testFunc(a, b)
{
    /*
            INSTEAD OF DOING THIS:
    if (a<b)
    {
        return true;
    }
    else
    {
        return false;
    }
    */


    return a<b; //you can do this. It will either return true or false because it's a conditional statement
}

console.log(testFunc(10, 15));
