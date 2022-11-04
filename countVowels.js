//Return the number of vowels in a string

var thisString = "I am a cow an ear eye and useful"

//result = i=1, a=5 e=4 o=1 u=1


var allVowels=["a","e","i","o","u"]

function vowelCount(thisString){
    
var count =0
for (let i in thisString) {
  if(allVowels.includes(thisString[i]))
  {
      count++
  }
}
return count
}

console.log(vowelCount(thisString))



//Another way


var thisString = "I am a cow an ear eye and useful"

//result = i=1, a=5 e=4 o=1 u=1


var allVowels=["a","e","i","o","u"]

function vowelCount(thisString){
    
var count =0
for (let i of thisString) {
  if(allVowels.includes(i))
  {
      count++
  }
}
return count
}

console.log(vowelCount(thisString))
