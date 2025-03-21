let score = null                        // undefined    null      "33"  "33dada/prashant"  true/false

console.log(typeof score);              // undefined    object    string    string         boolean
                                        // \ /           \ /        \ /        \ /            \ /
let  valueInNumber = Number(score)      //  |             |          |          |              | 
console.log(typeof valueInNumber);      // number      number      number     number         number
console.log(valueInNumber);             // NaN            0          33    NaN(not a number)  1/0
//number
//"33" => 33
// "33ddfdfg" =>NaN
//true => 1; false ->0


let isLoggedIn = null
let booleanISLoggedIn = Boolean(isLoggedIn)
console.log(booleanISLoggedIn);
//boolean
//1 => true; 0=>false
// ""=>false ;
// "prashant" =>true
//undefined/null =>false

let someNumber;
let stringNumber =  String(someNumber)
console.log(typeof stringNumber);
console.log((stringNumber));
//string
//33=> "33"
//true/false => "true/false"
//definded/null => "defined/null" 


/*********************Opreration*************************************************************************** */

let value = 3
let negValue = -value
console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello"
let str2 = " Prashant" 
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2);                     //12
console.log(1 + "2");                     //12
console.log("1" + 2 + 2);                 //122
console.log(1 + 2 + "2" );                //32
//only in case of string + number  opertation concatenation happens, number implicitly converted into string.

console.log("5" - 2);
console.log(2 - "5");
//In case of string - number  opertation string converted into number and  - operation happens.

console.log( 3 + 4 * 5 % 3);              //5

console.log(+true);                        //1
console.log(+"");                          //0

let num1, num2, num3
num1 = num2 = num3 = 4      

let gameCounter = 100
let gameCounter1 = gameCounter++;                             //postincreament
let gameCounter2 = ++gameCounter1;                            //preincreament
console.log(gameCounter2,gameCounter,gameCounter1);           // 101  101 101


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

