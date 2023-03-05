var count = 0;

function testFunc(card)
{
    switch(card)
    {
        case 2:
            case 3:
                case 4:
                    case 5:
                        case 6:
                            count++;
                            break;
        case 10:
            case 'J':
                case 'Q':
                    case 'K':
                        case 'A':
                            count--;
                            break;
    }

    var holdbet = 'Hold';

    if(count>0)
    {
        holdbet = 'Bet';
    }

    return count + " " + holdbet;

}

testFunc(2);
testFunc('K');
testFunc(10);
testFunc('K');
testFunc('A');
console.log(testFunc(4));