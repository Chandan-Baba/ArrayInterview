//Calculate the sum of numbers within an array

var arrayOfNums=[1,5,-3,-4,2]
var sumOfArrayNums=0

function sumOFArray(arrayOfNums)
{
    
   sumOfArrayNums=arrayOfNums.reduce((a, b) => a + b, 0)
   return sumOfArrayNums
}


console.log(sumOFArray(arrayOfNums))
