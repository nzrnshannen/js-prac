var myArray = [];
var i=10;


do{
    myArray.push(i);
    i++;
}while(i<5);

console.log(i, myArray);

/*
    WHY IS DO-WHILE DIFFERENT FROM FOR AND WHILE LOOPS?
    
    do-while() is a post-test loop. It means that it will
    execute whatever is inside the do{} before even checking the condition.

    Take the code above as an example. Looking at the condition, i<5. This means
    that if the value of i is 5 or greater than that, the loop will stop.

    The given value of i is 10. If we use while()/for() loop to this,
    the myArray.push(i) won't be even executed.

    In do-while(), myArray.push(i) was executed and then i is incremented
    turning i into 11 (which explains why in the console it shows 11 for the 
        value of i).
    
    After executing the body of the do{}, it now checks the condition.
    Since 11<5 is false, it will now exit the loop.
    
*/