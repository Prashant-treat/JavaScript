//Dates
let myDate = new Date()
// console.log(myDate);      time is not given in proper format
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(typeof myDate);

// let myCreationDate = new Date(2025, 0, 23)       moths start with 0;
// let myCreationDate = new Date(2025, 0, 23, 5 , 3)
// let myCreationDate = new Date("2025-01-14")
let myCreationDate = new Date("01-14-2025")
console.log(myCreationDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);                         //gives millisecond from 1970 till now
console.log(myCreationDate.getTime());           //gives millisecond from 1970 till input date
console.log(Math.floor(Date.now()/1000));        //gives second from 1970 till now

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);           //+1 for understand of end user 
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday: "long",  // Full name of the weekday (e.g., "Monday")
    hour: '2-digit',  // Two-digit hour (01, 02, ..., 12)
    minute: '2-digit',  // Two-digit minute (00, 01, ..., 59)
    second: '2-digit',  // Two-digit second (00, 01, ..., 59)
    hour12: true,  // 12-hour format with AM/PM
    timeZone: 'Asia/Kolkata'  // Set the time zone for India
}));