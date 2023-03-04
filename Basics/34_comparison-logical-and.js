function testLogicalAnd(val)
{
    if(val<=50 && val >= 25) //logical AND ( && )
    {
        //BOTH CONDITONS val<= 50 AND val >= 25 should be true in order to execute the statement below
        return "Yes";
    }

    return "No";
}

console.log(testLogicalAnd(10));