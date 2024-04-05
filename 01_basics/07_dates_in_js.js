let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2024, 9, 31);
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date(2024, 9, 31, 5, 3);
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2024-01-01");
console.log(myCreatedDate3.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());