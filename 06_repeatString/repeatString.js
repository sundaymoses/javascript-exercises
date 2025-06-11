const repeatString = function(str, times) {
    let stri = '';
    if (times<0) {
        return "ERROR"
    }
    for (let i = 0; i < times; i++) {
        stri += str
    
    }
//   const strString=String(str);
//   console.log(strString);
//  const finalResult= str.repeat(times);
//  return finalResult;
// console.log(stri)
return stri;
};


// Do not edit below this line
module.exports = repeatString;
