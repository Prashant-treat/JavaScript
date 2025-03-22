// singleton    in object literal is not single / by constructor is singleton
//  Object.create   --this make singleton


// object literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "prashant",
    "full name": "pkteat",                //in case of this  key you have use Jsuser["full name"]
    mySym: "mykey1",                     //its working but not key is not used as symbol
   [mySym]: "mykey1",                     // correct way of taking key as a symbol
    age: 19,
    location: "Newdelhi",
    email: "pk@google.com",
    isLoggedIN: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(Jsuser.mySym);                 //its working but not key is not used as symbol
console.log(Jsuser[mySym]);                // correct way of taking value of key as a symbol

Jsuser.email = "kp@google.com"
// Object.freeze(Jsuser);                   //after this operation the value of object Jsiser cannot be changed
Jsuser.email = "pk@google.com"
console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello Js user");
}


Jsuser.greetingTwo = function(){
    console.log(`Hello Js user , ${this.name}`);
}


console.log(Jsuser.greeting);                    //give reference of function
console.log(Jsuser.greeting());                  //print fucntion call
console.log(Jsuser.greetingTwo());                  //print fucntion call


