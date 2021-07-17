// Example 1: Basic arrow function syntax
const add = (x: number, y: number): number => {
	return x + y;
};

console.log(add(1, 2)); // Output: 3

// Example 2: Arrow function with implicit return statement
const multiply = (x: number, y: number): number => x * y;

console.log(multiply(3, 4)); // Output: 12

// Example 3: Arrow function with no arguments
const greet = (): void => {
	console.log("Hello!");
};

greet(); // Output: Hello!

// Example 4: Arrow function with object destructuring
const person = { name: "John", age: 30 };

const introduce = ({ name, age }: { name: string; age: number }): void => {
	console.log(`My name is ${name} and I am ${age} years old.`);
};

introduce(person); // Output: My name is John and I am 30 years old.
