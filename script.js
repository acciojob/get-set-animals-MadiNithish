//complete this code
class Animal {
	constructor(species){
		this._species = species;
	}
	get species(){
		return this._species;
	}
	makeSound(){
		console.log(`the ${this.species} makes a sound`)
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof")
	}
}

class Cat extends Animal {
	purr(){
		console.log("purr");
	}
}

const mycat = new Cat("siamese");
myCat.makeSound();

myCat.purr();

const mydog = new Dog("Golden Retriever");
mydog.makeSound();
mydog.bark();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
