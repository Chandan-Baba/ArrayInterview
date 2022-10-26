let arr= [100, 1234, 10, 4, 1212]
  let arrLength= arr.length;
  findMinMax(arr)
  
  function findMinMax(arr){
  var minElem = maxElem= arr[0];
  for(var i=0;i<=arrLength; i++)
  {
    if(arr[i]>maxElem){
      maxElem= arr[i]
    }
    else if(arr[i] < minElem){
      minElem= arr[i]
    }
    
  }
  var minMax= [minElem,maxElem]
  console.log(minMax)
 }
 
