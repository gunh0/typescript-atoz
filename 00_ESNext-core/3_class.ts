abstract class Animal {
	constructor(public name?: string, public age?: number) {}
	abstract makeSound(): string;
}

class Cat extends Animal {
	makeSound() {
		return "meow";
	}
}

class Dog extends Animal {
	makeSound() {
		return "woof";
	}
}

let animals: Animal[] = [new Cat("cat", 1), new Dog("dog", 2)];
let sounds = animals.map((animal) => animal.makeSound());

console.log(sounds);
