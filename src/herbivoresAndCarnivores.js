'use strict';
class Animal {
  static alive = [];
  health = 100;

  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
}
class Herbivore extends Animal {
  hidden = false;

  constructor(name) {
    super(name);
  }

  hide() {
    this.hidden = true;
  }
}
class Carnivore extends Animal {

  constructor(name) {
    super(name);
  }

  bite(animal) {
    if (animal instanceof Herbivore && !animal.hidden) {
      animal.health -= 50;

      if (animal.health <= 0) {
        Animal.alive.filter(a => a.name === animal.name);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
