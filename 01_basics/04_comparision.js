// console.log(2 > 1)          //1
// console.log(2 >= 1)         //1 
// console.log(2 < 1)          //0
// console.log(2 == 1)         //0
// console.log(2 != 1)         //1


console.log("2" > 1);         //string to number  --true
console.log("02" > 1);       //string to number    --true

console.log(null > 0);        //null to 0  --false  (null is coerced to 0)
console.log(null == 0);       //== operator performs type coercion. null is only loosely equal to undefined, but not to 0. --false
console.log(null >= 0);       //null to 0  --true  (null is coerced to 0)

/*The reason is that an equality check == and comparisions > < 
>= <= work differently.
Comparisions convert null to a number,treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false. 
*/ 

console.log(undefined == 0);      //false
console.log(undefined >= 0);       //false
console.log(undefined < 0);       //false
console.log(undefined > 0);       //false

console.log(undefined == null);      //true
console.log(undefined <= null);      //false    >= -- false
console.log(undefined > null);       //false
console.log(undefined < null);       //false
// always avoid this kind of comparision in work .

// ===   (strick check)
console.log("2" === 2);        //false
//check value with type