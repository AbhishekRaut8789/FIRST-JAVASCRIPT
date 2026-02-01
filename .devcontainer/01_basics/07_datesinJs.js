// DATE 
let myDate = new Date();
// console.log(myDate); 
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate); // object

let myCreatedDate = new Date(2026, 1, 2); // year, month (0-indexed), day

// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toISOString());
// console.log(myCreatedDate.toUTCString());
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toLocaleDateString());
// console.log(myCreatedDate.toLocaleTimeString());

let myCreatedDate1 = new Date(2026, 1, 2, 12, 30, 0); // year-month-day hours minutes  seconds
// console.log(myCreatedDate1.toString());
// console.log(myCreatedDate1.toDateString());
// console.log(myCreatedDate1.toISOString());
// console.log(myCreatedDate1.toUTCString());
// console.log(myCreatedDate1.toLocaleString());
// console.log(myCreatedDate1.toLocaleDateString());
// console.log(myCreatedDate1.toLocaleTimeString());

let myCreatedDate2 = new Date("2026-02-02"); 
// console.log(myCreatedDate2.toString());
// console.log(myCreatedDate2.toDateString());
// console.log(myCreatedDate2.toISOString());
// console.log(myCreatedDate2.toUTCString());
// console.log(myCreatedDate2.toLocaleString());
// console.log(myCreatedDate2.toLocaleDateString());
// console.log(myCreatedDate2.toLocaleTimeString());

let myCreatedDate3 = new Date("02-02-2026"); 

// console.log(myCreatedDate3.toString());
// console.log(myCreatedDate3.toDateString());
// console.log(myCreatedDate3.toISOString());
// console.log(myCreatedDate3.toUTCString());
// console.log(myCreatedDate3.toLocaleString());
// console.log(myCreatedDate3.toLocaleDateString());
// console.log(myCreatedDate3.toLocaleTimeString());

let myTimeStamp = Date.now(); // milliseconds since January 1, 1970

// console.log(myTimeStamp);
// console.log(myCreatedDate3.getTime()); // milliseconds since January 1, 1970 for myCreatedDate3

// console.log(Date.now());
// console.log(Date.now() /100000); // seconds since January 1, 1970
// console.log(Math.floor(Date.now() /100000)); // seconds since January 1, 1970

let newDate = new Date();
//console.log(newDate);
//console.log(newDate.getFullYear());
//  console.log(newDate.getMonth()+1); // 0-11
// console.log(newDate.getDate());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getDay()); // 0-6 (0 is Sunday, 6 is Saturday)

' ${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()} '
// console.log(`${newDate.getDate()}/${newDate.getMonth()+1}/${newDate.getFullYear()} `); // DD/MM/YYYY
// console.log(`${newDate.getMonth()+1}/${newDate.getDate()}/${newDate.getFullYear()} `); // MM/DD/YYYY

newDate.toLocaleString('default');{
    weekday: 'long';
    year: 'numeric';
    month: 'long';
    day: 'numeric';
}
// console.log(newDate.toLocaleString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })); // full name of the day
// console.log(newDate.toLocaleString('default', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })); // short name of the day
// console.log(newDate.toLocaleString('default', { weekday: 'narrow', year: 'numeric', month: 'narrow', day: 'numeric' })); // narrow name of the day
// console.log(newDate.toLocaleString('default', { year: 'numeric', month: '2-digit', day: '2-digit' })); // DD/MM/YYYY with 2-digit month and day
// console.log(newDate.toLocaleString('default', { year: '2-digit', month: '2-digit', day: '2-digit' })); // YY/MM/DD with 2-digit month and day


