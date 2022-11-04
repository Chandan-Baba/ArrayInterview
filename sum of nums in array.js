//Calculate the sum of numbers within an array

var arrayOfNums=[1,5,-3,-4,2]
var sumOfArrayNums=0

function sumOFArray(arrayOfNums)
{
    
   sumOfArrayNums=arrayOfNums.reduce((a, b) => a + b, 0)
   return sumOfArrayNums
}


console.log(sumOFArray(arrayOfNums))


function sumArray(ar)
{
    let sum = 0;
    
    for(let i = 0; i < ar.length; i++)
    {
        sum += ar[i];
    }
    
    return sum;
}

let ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
let sum = sumArray(ar);
console.log(sum);
