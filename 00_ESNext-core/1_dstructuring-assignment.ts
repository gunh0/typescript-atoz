// Example 1: Destructuring an object
const person1 = {
	name: "John Doe",
	age: 30,
	gender: "male",
};

const { name, age, gender } = person1;

console.log(name); // "John Doe"
console.log(age); // 30
console.log(gender); // "male"

// Example 2: Destructuring a nested object
const person2 = {
	name: "John Doe",
	age: 30,
	gender: "male",
	address: {
		city: "Seoul",
		country: "South Korea",
	},
};

const {
	name: name2,
	age: age2,
	gender: gender2,
	address: { city, country },
} = person2;

console.log(name2); // "John Doe"
console.log(age2); // 30
console.log(gender2); // "male"
console.log(city); // "Seoul"
console.log(country); // "South Korea"

// Example 3: Destructuring an array
const fruits = ["apple", "banana", "orange"];

const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit); // "apple"
console.log(secondFruit); // "banana"
console.log(thirdFruit); // "orange"

// Example 4: Destructuring an array and assigning the rest to a new array
const fruits2 = ["apple", "banana", "orange", "grape", "kiwi"];

const [firstFruit2, secondFruit2, ...otherFruits2] = fruits2;

console.log(firstFruit2); // "apple"
console.log(secondFruit2); // "banana"
console.log(otherFruits2); // ["orange", "grape", "kiwi"]
