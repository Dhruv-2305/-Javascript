let number = "33"

console.log(typeof number);//first way to check the typeof variable in let keyword
console.log(typeof(number))// second way to check the typeof variable declared in let keyword
let stringnumber = String(number)
//here firstly there was variable Number then we converted the datatype from Number to String


let firstName = null
console.log(typeof firstName);
console.log(firstName)

let numberName = Number(firstName);
console.log(Number(firstName));// here we check the the value of null by converting to number datatype by declaring Number(firstname);

let stringName = 'dhruv'
console.log(typeof stringName);
console.log(typeof (stringName));

let newstringNumber = Number(stringName)
console.log(Number(stringName));// here we checked and understand that we converted the string to number but dhruv is name not a number so result is NaN.

//So we can check by converting the variables and datatypes of each other .

let sothisNumber = 0
console.log(typeof sothisNumber)

let sothisBoolean = Boolean(sothisNumber)
console.log(Boolean(sothisNumber))
//console.log(typeof (sothisNumber))// here we converted the number to Boolean value and came answer false for 0 .

