function sumOfEachNum(input){
	
  let inputString = ""+input;
  var convertToArray= inputString.split("").map((num)=>{
  return Number(num)
});
	console.log(convertToArray);
  let resultedNum = convertToArray.reduce((a,b)=>{
  	return a+b
  });
  if(resultedNum>9){
  	sumOfEachNum(resultedNum)
  }
  else {
  	console.log(resultedNum);
  }
}

sumOfEachNum(4987)
