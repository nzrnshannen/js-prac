function testFunc(val)
{
    if(val===7)
    {
        return "Equal";
    }

    return "Not Equal";
}


console.log(testFunc(5));

/*
    strict equality ( === ) operator
        - will check if the value are both the same
            * in terms of the value and DATA TYPE*


    Important key takeaways:
    1. The equality ( == ) operator
        if(3 == '3')
            - will return true
            - using the equality ( == ) operator will automatically
                convert the string to a number
    2. The strict equality ( === ) operator
        if(3 === '3')
            - will return false
            - will strictly compare if two values are the same,
            including its data type
*/