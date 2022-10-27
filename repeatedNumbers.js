var iString= "MADAM"
  
function hasRepeats(iString){
    var eqvArray= iString.split('')
    arrLength= eqvArray.length;
    var count=1; var letters=[];
    for(let i=0; i<arrLength; i++)
    {
        if(eqvArray[i]=== eqvArray[i+1]){
            count++;
        }
        else {
            let value = `${count}${eqvArray[i]}`;
            letters.push(value);
            count= 1;
        }
        
    }
}

console.log(hasRepeats(iString))




