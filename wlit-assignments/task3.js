class Animal {
    constructor(name) {
        this.name = name;
    }

    // Method to check if the animal name has 'a'
    hasA() {
        return this.name.includes('a');
    }
}

// Child classes for animals
class Dog extends Animal {
    constructor() {
        super('dogs');
    }
}

class Cat extends Animal {
    constructor() {
        super('cats');
    }
}

class Rabbit extends Animal {
    constructor() {
        super('rabbits');
    }
}

class Mice extends Animal {
    constructor() {
        super('mice');
    }
}

// Create an array of animals
const animals = [new Dog(), new Cat(), new Rabbit(), new Mice()];

// Check if each animal has the letter 'a' and output the result
animals.forEach(animal => {
    console.log(`${animal.name}: ${animal.hasA()}`);
});

// New array by filtering out animals that do not have 'a'
const filteredAnimals = animals.filter(animal => animal.hasA()).map(animal => animal.name);

console.log(filteredAnimals);
