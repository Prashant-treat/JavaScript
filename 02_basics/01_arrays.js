//array

const myArr = [0, 1, 2, 3, 4, 5]
const myheros = ['shaktiman', 'naagraj']

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[0])

//Array methods

// myArr,push(6)
// myArr,push(7)
// myArr,pop()

// myArr.unshift(9)                  //shift elements to right and add 9 at first position
// myArr.shift()                     //shift elements to left and loose the first position element

// console.log(myArr.includes(9));    //check element is present or not
// console.log(myArr.indexOf(9));    // check the index of the element 

const newArr = myArr.join()            //Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(myArr);
// console.log(newArr);



//slice.splice

console.log("A ",myArr);

const myn1 = myArr.slice(1, 3)      //copy the portion of the array  [index,index)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)     //take the portion of the arrayy  [index,length} , original array is manipulated
console.log("C ", myArr);
console.log(myn2);




