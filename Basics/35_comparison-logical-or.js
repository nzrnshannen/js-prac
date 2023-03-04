function testLogicalOr(val)
{
    if(val<10 || val > 20)
    {
        //atleast one condition should be true in order to execute this statement
        return "Outside";
    }

    if(val>20)
    {
        return "Outside";
    }

    return "Inside";
}