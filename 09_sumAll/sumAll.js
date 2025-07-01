//this functions finds the sum of the digits brought inside as arguments
const sumAll = function(a,b) {

    //convert a &b to numbers
    let num1= a;
    let num2= b;
// if(!Number.isInteger(a))
       if(!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
       if (num1 <0 || num2<0 ) return "ERROR";
       if(num1 > num2){
        let temp =num1;
        num1= num2;
        num2 =temp;
       }
let sum=0;
for (let i = num1; i <= num2; i++) {
 sum +=i;
}
 return sum;
}
module.exports = sumAll;
