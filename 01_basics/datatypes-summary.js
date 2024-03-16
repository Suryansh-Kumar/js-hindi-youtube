// ? Primitive
// ? 7 : Strings, number, boolean, null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id);
console.log(anotherId);
console.log(id === anotherId);

const bigNumber = 84659436498439564389634n;
console.log(typeof bigNumber);

// ? Referance/Non-Primitive
// ? Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Hitesh",
    age: 22
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);