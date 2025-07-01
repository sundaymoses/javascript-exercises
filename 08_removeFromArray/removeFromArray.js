//this code expect us to fiter out array elements that appears in the arguments passed
//we expect 2 arguments: the array, and the values that will be filtered from the array

const removeFromArray = function(array, ...args) {
//create a new array to store array that does not contain the filtered values
// let arr= [];
//now fiter out the arrays using the args
// array.forEach((item)=>{
//     //im using ! to say "if it is not in the array, push it to the new array"
//     if(!args.includes(item)){
//         arr.push(item);
//     }
// })
return array.filter((item)=>{
    if(!args.includes(item)){
        return item;
    }
})
};

// Do not edit below this line
module.exports = removeFromArray;
