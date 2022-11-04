let num0 =0
let num1 =1

function fiboWithoutRecur()
{
    console.log(num0)
    for (let i= 2; i<10;i++)
    {
        var firstTwoSum = num0+num1
        
        num0=num1
        num1= firstTwoSum
        console.log(num0)
    }

}


console.log(fiboWithoutRecur())
