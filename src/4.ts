abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  comeIn(person: Person): void {
    if (this.door) this.tenants.push(person);
  }
}

class MyHouse extends House {
  constructor(myHouseKey: Key) {
    super();
    this.key = myHouseKey;
  }

  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}

class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
