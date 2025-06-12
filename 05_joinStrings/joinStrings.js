/*
First name: Carlos
 Last name: Stevenson
 This year: 1965
 Birth year: 1947

 The greeting should read: "Hello! My name is Carlos Stevenson and I am 18 years old."
*/

// Add your code right below, good luck!
// const firstName="Carlos";
// const lastName="Stevenson";
// const thisYear=1965;
// const birthYear=1947;
// const age= thisYear-birthYear;
// const fullName= firstName + " " + lastName;
// const greeting="Hello! My name is " + fullName + " and I am " + age +" years old."


//for loop for n factorial

function factorial(num) {
// let x=num-1;
if (num===0){
  return 1;
}
if (num>0) {
for (let x = num-1; x >1; x--) {
  num*=x;
  
}

}
return undefined}
console.log(factorial(-5));

// Do not change this
// module.exports = {
//   firstName: typeof firstName === 'undefined' ? undefined : firstName,
//   lastName: typeof lastName === 'undefined' ? undefined : lastName,
//   thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
//   birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
//   greeting: typeof greeting === 'undefined' ? undefined : greeting,
//   fullName: typeof fullName === 'undefined' ? undefined : fullName,
//   age: typeof age === 'undefined' ? undefined : age
// }
