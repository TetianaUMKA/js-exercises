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

const greet = customer.sayHello.bind(customer);

greet(); // "Hello, Jacob!"

function sayHello(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

const user = {
  name: "Alice",
};

const greet = sayHello.bind(user);

greet("Hello"); // "Hello, Alice"
