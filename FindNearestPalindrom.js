/*4. Find the next palindrome number. If I pass any integer value to function it should return the next palindrome number.
For example:
If I pass 105 - it should return 111
If I pass 100 - it should return 101
*/


var inputNum = 4239659438
console.log(findPalindrom(inputNum))

function findPalindrom(inputNum){
    let inputStr = inputNum.toString();
    const half = inputStr.substring(0, Math.floor(inputStr.length/2));
    var revI = half.split('').reverse().join('')
    const first = inputStr.length % 2 === 0 ? half : inputStr.substring(0,
    Math.ceil(inputStr.length/2))
    
    return +(first+revI);
}
