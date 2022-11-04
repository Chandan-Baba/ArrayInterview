//count occurence of number in an array
//arr = [1,2,4,5,2,1,1,5]
//result [31,22,14,25]


let mainArr= [1,2,4,5,2,1,1,5]
let count={}
function CountOccurance(mainArr){

for (const element of mainArr) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}
return count
}



console.log(CountOccurance(mainArr))
