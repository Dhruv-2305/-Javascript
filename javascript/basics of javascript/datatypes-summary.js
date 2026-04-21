// there are two main types of javascript 
// namely one section is of primitive and non primitive 

// primitive (store by value)- String, Number,  Null, Undefined, Boolean, Symbol and BigInt  

// non-primitive(store by reference)- array, objects , functions

//let name = 'dhruv'
//console.log(typeof(name));

//let value = 23
//console.log(typeof(value))

//let myName= null
//console.log(typeof(myName));

//let lastName= undefined
//console.log(typeof(lastName));

//let userLoggedin= false
//console.log(typeof(userLoggedin))

//let valueofPi= Symbol
//console.log(typeof(valueofPi))

//let bigNum= 3837858379998
//console.log(typeof(bigNum))

//non primitive 
//let heroes =["ironman", "superman", "batman"]
//console.log(heroes);

//let myObj={
    name:'dhruv',
    age:20
}
//console.log(myObj)

//const myFunction = function(){
   //console.log("hello world!")
}

//console.log(typeof(heroes))


//+++++++++++
 // memory types are stack and heap memory 
 // stack (makes a copy of variable)
 // heap (makes a reference of variable)

 let userOne={
    name:'dhruvpatil',
    email:'dhruv@example.com'
 }

 let userTwo = userOne

 userTwo.email = 'dhruv@sbi.com'
 console.log(userOne.email)
 console.log(userTwo.email)
 //here it takes the reference of userOne email and updates in both userOne and userTwo emails .