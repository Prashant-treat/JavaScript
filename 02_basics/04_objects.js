// const tinderUser = new Object()      //this is singleton object
const tinderUser ={}

tinderUser.id = "123asdf"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@google.com",
    fullname: {
        userfullName: {
            firstName: "prashant",
            lastName: "kamar"
        }
    }
}
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullName)
console.log(regularUser.fullname.userfullName.firstName)

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}
const obj4 = { 5: "a", 6: "b"}
// const obj3 = { obj1, obj2}                    //it cause similar like array concat, the object is push not its element

// const obj3 = Object.assign(obj1,obj2);         //all obj assing to obj1 then assign to obj3    ,here 0bj1 === obj3 --true
const obj3 = Object.assign({},obj1,obj2);           //all obj assing to {} then assign to obj3,both same but this is come under good pracitice      

const obj5 = {...obj1, ...obj2, ...obj4 }          //most used method
console.log(obj5);                              


const users = [
    {
        id: 1,
        email: "p@mail.com" 
    },
    {
        id: 1,
        email: "p@mail.com" 
    },
    {
        id: 1,
        email: "p@mail.com" 
    },
    {
        id: 1,
        email: "p@mail.com" 
    },
]

console.log(users[1].email)                   //accessing element from array of ojects
console.log(tinderUser);

console.log(Object.keys(tinderUser))             //return all the keys of object in an array
console.log(Object.values(tinderUser))           ////return all the vlues of object in an array
console.log(Object.entries(tinderUser))           //return all the keys-value pair of object in separate  array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));   //for checking key existed or not


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Object Destructuring   and JSON api

const course ={

    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor } = course                      //user not  for writting repeatedly (course.courseIntructor) 
console.log(courseInstructor);

const {courseInstructor:Instructor } = course                      //user not  for writting repeatedly (course.courseIntructor)  like a alias
console.log(Instructor);

//json
//strucnture of json file
// {
//     "name": "histesh",
//     "coursenmae": "js in hindi",
//     "price": "free" 
// }

//json 
//array of object
// [
//     {},
//     {},
//     {}
// ]