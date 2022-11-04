var allArrayNums= [1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100]

//result = [1,2,3,6,9,7,10,100,-1]
function findDistinctOnly(allArrayNums)
{
    let emptyArr=[]
    
    for(let i =0; i< allArrayNums.length;i++)
    {
        //is in array
        if(!(isInArray(allArrayNums[i],emptyArr)))
        {
           emptyArr.push(allArrayNums[i]) 
        }
    }
    return emptyArr
}

function isInArray(n,allArrayNums)
{
    console.log("test",n)
    for(let i=0;i<allArrayNums.length;i++)
    {
        if(allArrayNums[i]===n)
        {
            return true
        }
    }
    return false
}

console.log(findDistinctOnly(allArrayNums))
