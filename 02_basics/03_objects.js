// singleton

// object literals

const mySym = Symbol("Key 1");

const Jsuser = {
	name: "Hitesh",
	"full name": "Hitesh Choudhary",
	[mySym]: "Key 1",
	age: 18,
	location: "Jaipur",
	email: "hitesh@google.com",
	isLoggedIn: false,
	lastLoginDays: ["Monday", "Saturday"],
};

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(Jsuser[mySym]);

Jsuser.email = "hitesh@chatgpt.com";
// Object.freeze(Jsuser);
Jsuser.email = "hitesh@microsoft.com";
console.log(Jsuser);

Jsuser.greeting = function () {
	return ("Hello Jsuser");
};

Jsuser.greetingTwo = function () {
	return (`Hello Jsuser, ${this.name}`);
};

console.log(Jsuser.greeting);
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo);
console.log(Jsuser.greetingTwo());