const reverseString = function(str) {
  let  returnedStr="";
  let finalReturn="";
  let str1=str.split("");
//  returnedStr=str.split("").reverse().join("");
for (let i = str1.length-1; i >=0; i--) {
   returnedStr += str1[i];
   finalReturn=returnedStr;
   
}
return finalReturn;
// console.log(finalReturn);
}
// reverseString("hey there");
// Do not edit below this line

module.exports = reverseString;
