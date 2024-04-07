const user = {
	username: "Hitesh",
	price: 999,
	welcomeMessage: function () {
		console.log(`${this.username}, Welcome to Website`);
		console.log(this);
	},
};

user.welcomeMessage();
user.username = "Sam";
user.welcomeMessage();

console.log(this);
console.log(typeof this);

function chai() {
	let username = "hitesh";
	console.log(this.username);
}

chai();

const chai2 = function () {
	let username = "hitesh";
	console.log(this.username);
};
chai2();

const chai3 = () => {
	let username = "hitesh";
	console.log(this);
};
chai3();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({ username: "hitesh" });
console.log(addTwo(3, 4));

const myArray = [2, 5, 3, 7, 8];

// myArray.forEach()
