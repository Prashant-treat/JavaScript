// Primitive

//7 type : String, Number, Boolean, null, undefined, Symbol, BigInt

const score  = 100
const scoreValue = 100.3        //number

const isLoggedIn = false        //boolean
const outsideTemp = null        //null represents empty
let userEmail;                  //undefined
 
const id = Symbol('123')              //Symbol represents unique
const anotherId = Symbol('123')
console.log(id === anotherId)         //false means not same variable

const bigNumber = 34225352542355262362n     //BigInt


// Reference (Non primitive)

// Array, Objects, Function
const heros = ["shaktiman", "naagraj", "Doga" ];
console.log(typeof heros);                       //array object

let myObj ={
    name: "prashant",
    age: 22,
}
console.log(typeof myObj);                  //object

let myFunction = function(){
    console.log("Hello World")
}
console.log(typeof myObj);                  //funciton object

// https://262.ecma-international.org/5.1/#sec-11.4.3

