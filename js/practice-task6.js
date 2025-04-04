const pizzaPalace = {
  pizzas: ["Supercheese", "Smoked", "Four meats"],
  checkPizza(pizzaName) {
    return this.pizzas.includes(pizzaName);
  },
  order(pizzaName) {
    const isPizzaAvailable = this.checkPizza(pizzaName);

    if (!isPizzaAvailable) {
      return `Sorry, there is no pizza named «${pizzaName}»`;
    }

    return `Order accepted, preparing «${pizzaName}» pizza`;
  },
};

console.log(pizzaPalace.order("Smoked")); // "Order accepted, preparing «Smoked» pizza"
console.log(pizzaPalace.order("Four meats")); // "Order accepted, preparing «Four meats» pizza"
console.log(pizzaPalace.order("Big Mike")); // "Sorry, there is no pizza named «Big Mike»"

// example
const book = {
  updateTitle(newTitle) {
    console.log(newTitle, this);
  },
};
const update = book.updateTitle;
update("Lord Of The Rings"); // "Lord Of The Rings", undefined
// In this case, we get such result as 'undefined' because turned on 'use strict' or type='module' of script // but we can get 'Window object' if turn off 'use strict'

// call
function greet(str) {
  console.log(`${str}, ${this.username}, your room is ${this.room}!`);
}

const user1 = {
  username: "Maria",
  room: 27,
};

const user2 = {
  username: "Emma",
  room: 191,
};

greet.call(user1, "Welcome");
greet.call(user2, "Aloha");

// just a test task is not used in real work
function greet2(name) {
  console.log(`Hello, ${name}! I am ${this.person}`);
}
const person = "John";
const context = {
  person: "Alice",
};
greet2.call(context, "Bob"); // "Hello, Bob! I am Alice"

// apply
function greet3(str) {
  console.log(`${str}, ${this.username}, your room is ${this.room}!`);
}

const mango = {
  username: "Mango",
  room: 27,
};

const poly = {
  username: "Poly",
  room: 191,
};

greet3.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
greet3.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"

// bind
const customer = {
  username: "Jacob",
  sayHello() {
    console.log(`Hello, ${this.username}!`);
  },
};

customer.sayHello(); // "Hello, Jacob!"

const greet4 = customer.sayHello.bind(customer);

greet4(); // "Hello, Jacob!"

function sayHello(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

const user = {
  name: "Alice",
};

const greet5 = sayHello.bind(user);

greet5("Hello"); // "Hello, Alice"

// task
const library = {
  books: 1923,
  logBookCount() {
    console.log(this.books);
  },
};

const showBooks = library.logBookCount.bind({ books: 724 });

showBooks(); // 724

// task
("use strict");

const library2 = {
  books: 1923,
  logBookCount() {
    console.log(this.books);
  },
};

function showBooks2(callback) {
  callback();
}

showBooks2(library2.logBookCount.bind(library2)); // 1923

// [[Prototype]]

const parent = {
  name: "Stacey",
  surname: "Moore",
  age: 54,
  heritage: "Irish",
};

const child = Object.create(parent);
child.name = "Jason";
child.age = 27;

console.log(parent.isPrototypeOf(child)); // true

console.log(child.hasOwnProperty("name")); // true
console.log(child.hasOwnProperty("age")); // true
console.log(child.hasOwnProperty("surname")); // false
console.log(child.hasOwnProperty("heritage")); // false
console.log(child.age); // 27
console.log(child.name); // Jason
console.log(child.heritage); // Irish

console.log(parent.hasOwnProperty("surname")); // true
console.log(parent.hasOwnProperty("heritage")); // true
console.log(parent.age); // 54
console.log(parent.name); // Stacey
console.log(parent.heritage); // Irish

// examples of using of for...in
const animal = { legs: 4 };
const dog = Object.create(animal);
dog.name = "Mango";

for (const key in dog) {
  if (dog.hasOwnProperty(key)) {
    console.log(key); // "name"
  }
}
// replacement of for...in to for...of by using Object.keys, Object.values
const animal2 = { legs: 4 };
const dog2 = Object.create(animal2);
dog2.name = "Mango";

console.log(Object.keys(dog2)); // ["name"]
console.log(Object.values(dog2)); // ["Mango"]

for (const key of Object.keys(dog2)) {
  console.log(key); // "name"
}

// Chaining of [[Prototype]]
const objC = { c: "objC prop" };

const objB = Object.create(objC);
objB.b = "objB prop";

const objA = Object.create(objB);
objA.a = "objA prop";

console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
console.log(objC); // { c: "objC prop", [[Prototype]]: Object }

console.log(objA.hasOwnProperty("a")); // true
console.log(objA.a); // "objA prop"

console.log(objA.hasOwnProperty("b")); // false
console.log(objA.b); // "objB prop"

console.log(objA.hasOwnProperty("c")); // false
console.log(objA.c); // "objC prop"

console.log(objA.hasOwnProperty("x")); // false
console.log(objA.x); // undefined

// task
const ancestor1 = {
  name: "Paul",
  age: 83,
  surname: "Dawson",
  heritage: "Irish",
};

const parent1 = Object.create(ancestor1);
parent1.name = "Stacey";
parent1.surname = "Moore";
parent1.age = 54;

const child1 = Object.create(parent1);
child1.name = "Jason";
child1.age = 27;

console.log(ancestor1.hasOwnProperty("heritage")); // true
console.log(child1.hasOwnProperty("heritage")); // false
console.log(child1.heritage); // Irish

console.log(ancestor1.isPrototypeOf(parent1)); // true
console.log(parent1.isPrototypeOf(child1)); // true
console.log(ancestor1.isPrototypeOf(child1)); // true

console.log(window.document);
console.dir(window.document);

// Object-Oriented Programming
// class ObjectName {} - declaring of class
// new ObjectName() - creating of new template by ObjectName Prototype

class createUser {
  constructor(id, password, name) {
    this.id = this.id;
    this.password = this.password;
    this.name = name;
    this.cart = [];
  }
  addToCart(product) {
    this.cart.push(product);
  }
}
