var changed = 0;

function change(num) //num = 10
{
    return (num+5)/3; //return 5
                    //after doing calculations, it will obtain value 5
}

changed = change(10); //changed is now equals to 5
console.log(changed);

var processed = 0;

function processArg(num) //num = 7
{
    return (num+3)/5; //(7 + 3)/5
                      //10 / 5
                      // 2
    
                      //return 2
}

processed = processArg(7); 
//processed is equal to 2 after calling the function
console.log(processed);
