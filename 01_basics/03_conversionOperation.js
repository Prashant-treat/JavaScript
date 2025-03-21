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
