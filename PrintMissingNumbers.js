2.Print missing number in a given integer array of 1 to 100
input : [ 2,3, 10]
output : [1,4,5,6,7,8,9,11,...]
         
          
let arr = [2,30,45,89,100]

printMissingNumbers(arr)


function printMissingNumbers(arr){
 
 var comArray= [];
 
 for(var i=1;i<=100; i++){
    if(arr.includes(i)){
        comArray.push(i)
    }
    else{
        comArray.push(i)
    }
 }
 console.log(comArray)
}
