//Create a function that filters out negative numbers


var arrOfAllNums =[11,2,-34,65,2,-8]


function removalOfNegNums(arrOfAllNums)
{
    var n= arrOfAllNums.filter(el=> el>0)
    return n
}

console.log(removalOfNegNums(arrOfAllNums))
