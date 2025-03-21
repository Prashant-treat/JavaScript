//official documentation Ecma and mdc for reference

const accountId = 14453
let accountEmail  = "prashant@google.com"
var accountPassword = "12345"
accountCity = "Delhi"                 
/*
can also declare the variable 
with out the keyword const and
 let but not recommended
*/

let accountState;                 //if not defined the value of variable it gives undefined

// accountId  = 2                  const cannot be reasigned

/* 
prefer npt to use var because 
of issue in block scope and funtional scope
*/

accountEmail = "pk@gog.com"
accountPassword = "1212121"
accountCity = "New Delhi"

console.log(accountId);

console.table([ accountId ,accountEmail ,accountPassword,accountCity,accountState]);   //print the output format in table format