const name = "Prashant"
const repoCount = 50

// console.log(name + repoCount + "value") not recommended to write like this

console.log(`Hello my name is ${name} nd my repo count is ${repoCount}`);//use this instead

const gameName = new String('prashant')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0,7)   //give substring from [0,4) 
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    paramshakti   ";
console.log(newStringOne);
console.log(newStringOne.trim());             //remove white space and next line

const url = "https://hitesh.com/hitesh%20kumar"
console.log(url.replace('%20', '-'))
console.log(url.includes("hitesh"))             //check if it contains  given string or not.

console.log(url.split("/"));

