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

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const jonas = new User("Jonas", "jonas@mail.com");
console.log(jonas); // { name: 'Jonas', email: 'jonas@mail.com' }

const emma = new User("Emma", "emma@mail.com");
console.log(emma); // { name: Emma', email: 'emma@mail.com' }

// task
class Car {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

console.log(new Car("Nissan", "Murano", 31700)); // {brand: "Nissan", model: "Murano", price: 31700}

console.log(new Car("Audi", "Q3", 36000)); // {brand: "Audi", model: "Q3", price: 36000}

console.log(new Car("BMW", "X5", 58900)); // //{brand: "BMW", model: "X5", price: 58900}

// the params object

class User2 {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
  }
}

const ben = new User({
  name: "Ben",
  email: "ben@mail.com",
});

console.log(ben);
// { name: "Ben", email: "ben@mail.com" }

class User3 {
  constructor(params) {
    this.name = params.name;
    this.email = params.email;
  }

  getEmail() {
    return this.email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

const anna = new User3({
  name: "Anna",
  email: "annao@mail.com",
});

console.log(anna.getEmail()); // "anna@mail.com"

anna.changeEmail("new@mail.com");

console.log(anna.getEmail()); // "new@mail.com"

class Car2 {
  constructor(params) {
    this.brand = params.brand;
    this.model = params.model;
    this.price = params.price;
  }

  getPrice() {
    return this.price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
}

const lexus = new Car2({ brand: "Lexus", model: "RX", price: 84000 });
console.log(lexus);
console.log(lexus.getPrice()); // 84000
lexus.changePrice(78000);
console.log(lexus.getPrice()); // 78000
console.log(lexus.price); // 78000

console.log(Car2.prototype); // {gePrice: f, changePrice: f}
console.dir(Car2.prototype); // {gePrice: f, constructor: f,  changePrice: f}

// private properties
class Car3 {
  #brand;

  constructor(params) {
    this.#brand = params.brand;
    this.model = params.model;
    this.price = params.price;
  }

  getPrice() {
    return this.price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }

  getBrand() {
    return this.#brand;
  }

  changeBrand(newBrand) {
    if (newBrand.length < 2) {
      console.log("Incorrect brand name!");
      return;
    }
    this.#brand = newBrand;
  }
}

const newCar = new Car3({
  brand: "Toyota",
  model: "Land Cruiser 300",
  price: 112000,
});

console.log(newCar.brand, newCar.model, newCar.price); // undefined 'Land Cruiser 300' 112000
console.log(newCar.brand); // undefined

newCar.changeBrand("n"); // "Incorrect brand name!" #372
console.log(newCar.getBrand()); // undefined

newCar.changeBrand("newBrandName");
console.log(newCar.getBrand()); // newBrandName
console.log(newCar.brand); // undefined

// private methods
class User4 {
  #email;

  constructor(params) {
    this.name = params.name;
    this.email = params.email;
  }

  getEmail() {
    return this.email;
  }

  changeEmail(newEmail) {
    if (this.#validateEmail(newEmail)) {
      this.#email = newEmail;
    } else {
      console.log("Invalid email format");
    }
  }

  #validateEmail(email) {
    return email.includes("@");
  }
}

const michel = new User4({
  name: "Michel",
  email: "michel@mail.com",
});

console.log(michel.getEmail());
michel.changeEmail("michel200mail.com"); // 'Invalid email format'

michel.changeEmail("michel200@mail.com");
console.log(michel.getEmail()); // michel200@mail.com

// get and set
class User5 {
  #email;

  constructor(params) {
    this.name = params.name;
    this.#email = params.email;
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    if (newEmail === "") {
      console.log("Error! The email field cannot be empty!");
      return;
    } else if (!newEmail.includes("@")) {
      console.log("Invalid email format");
    }
    this.#email = newEmail;
  }
}

const newUser = new User({
  name: "Kevin",
  email: "kevin@mail.com",
});

console.log(newUser.email); // kevin@mail.com

newUser.email = "kevin@supermail.com";

console.log(newUser.email); // kevin@supermail.com

// task
class Car6 {
  #brand;
  #model;
  #price;

  constructor(params) {
    this.#brand = params.brand;
    this.#model = params.model;
    this.#price = params.price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}

// static properties

class User7 {
  #email;
  #role;

  static roles = {
    admin: "admin",
    editor: "editor",
    basic: "basic",
  };

  constructor(params) {
    this.#email = params.email;
    this.#role = params.role || User.roles.basic;
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }
}

const newUser7 = new User7({
  email: "monika@mail.com",
  role: User7.roles.admin,
});

console.log(newUser7.role); // "admin"
newUser7.role = User7.roles.editor;
console.log(newUser7.role); // "editor"

// task

class Car8 {
  #price;

  static maxPrice = 50000;

  constructor(params) {
    this.#price = params.price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice > Car8.maxPrice) {
      return;
    }
    this.#price = newPrice;
  }
}

const audi = new Car8({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

// static methods
class User8 {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return User8.#takenEmails.includes(email);
  }

  #email;

  constructor(params) {
    this.#email = params.email;
    User8.#takenEmails.push(params.email);
  }
}

const newUser8 = new User8({ email: "luke@mail.com" });

console.log(User8.isEmailTaken("richel@mail.com")); // false
console.log(User8.isEmailTaken("luke@mail.com")); // true

// task
class Car9 {
  static #maxPrice = 50000;

  static checkPrice(price) {
    if (price > Car9.#maxPrice) {
      return "Error! Price exceeds the maximum";
    }
    return "Success! Price is within acceptable limits";
  }

  constructor(params) {
    this.price = params.price;
  }
}

const audi9 = new Car9({ price: 36000 });
const bmw9 = new Car9({ price: 64000 });

console.log(Car9.checkPrice(audi9.price)); // "Success! Price is within acceptable limits"
console.log(Car9.checkPrice(bmw9.price)); // "Error! Price exceeds the maximum"
