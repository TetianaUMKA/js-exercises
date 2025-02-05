function greet(name) {
  console.log(`Welcome ${name}!`);
}
function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}
function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}
registerGuest("Jones", greet); // "Registering Jones!"
// "Welcome Jones!"
registerGuest("Jones", notify); // "Registering Jones!"
// "Dear Jones, your room will be ready in 30 minutes"

/////
// inline callback function //
function registerGuest2(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}
registerGuest2("Emma", function greet(name) {
  console.log(`Welcome ${name}!`);
});
registerGuest2("Tom", function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
});

function makePizza(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}
makePizza("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}`);
});
makePizza("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}`);
});

// forEach //
const numbers = [5, 10, 15, 20, 25];
numbers.forEach(function (number, index) {
  console.log(`Index ${index}, value ${number}`);
});

function filterArray(numbers, value) {
  let filteredNumbers = [];
  numbers.forEach(function (number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  return filteredNumbers;
}
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// arrow function

function functionDeclaration() {
  console.log("This is the function declaration");
}
functionDeclaration();

const functionExpression = function () {
  console.log("This is the function expression");
};
functionExpression();

const arrowFunction = (param1 = "param1", param2 = "param2") => {
  console.log(`This is the arrow function and its ${param1} & ${param2}`);
};
arrowFunction();

// explicit return
const add1 = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};

// implicit return
const add2 = (a, b, c) => a + b + c;

// an arrow function doesn`t have 'arguments'. Instead of it we use 'rest'
const add = (...args) => {
  console.log(args);
};
add(1, 2, 3); // [1, 2, 3]

const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => (totalPrice += item));

  return totalPrice;
};
console.log(calculateTotalPrice([164, 48, 291])); // 503

// a pure function is a function that never changes the output arguments and returns the identic result for the same arguments
function changeEven(numbers, value) {
  let updatedNumbers = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      const number = numbers[i] + value;
      updatedNumbers.push(number);
    } else {
      updatedNumbers.push(numbers[i]);
    }
  }
  return updatedNumbers;
}
console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
[144, 13, 81, 192, 136, 154];

// array.method(callback(currentValue, index, array));
// array.method(function (currentValue, index, array) {});
// array.method((currentValue, index, array) => {});

// method forEach always returns undefined
const filterArray2 = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
};
console.log(filterArray2([12, 24, 8, 41, 76], 38)); // [41, 76]

// method map always returns new array

const planets = ["Earth", "Mars", "Venus", "Jupiter"];
const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]
const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]
console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

// task
const planets2 = ["Earth", "Mars", "Venus", "Jupiter"];
const planetsLengths = planets2.map((planet) => planet.length);
console.log(planetsLengths);

// array of objects
const students = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];
const names = students.map((student) => student.name);
console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
const titles = books.map((book) => book.title);
console.log(titles);

// method flatMap always returns new array // this method flats a multi-level array into one level

const students2 = [
  { name: "Mango", courses: ["mathematics", "physics"] },
  { name: "Poly", courses: ["science", "mathematics"] },
  { name: "Kiwi", courses: ["physics", "biology"] },
];

const mappedCourses = students2.map((student) => student.courses);
console.log(mappedCourses); // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

const flattenedCourses = students2.flatMap((student) => student.courses);
console.log(flattenedCourses); // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];

//task
const books2 = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism"],
  },
];
const genres = books2.flatMap((book) => book.genres);
console.log(genres);

// task
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

const getUserEmails = (users) => {
  return users.map((user) => user.email);
};
console.log(getUserEmails(users));

// method filter returns new array which would be contain elements that satisfy the condition of the callback function

const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter((value) => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]

const negativeValues = values.filter((value) => value < 0);
console.log(negativeValues); // [-3, -68, -37]

const bigValues = values.filter((value) => value > 1000);
console.log(bigValues); // []

console.log(values); // [51, -3, 27, 21, -68, 42, -37]

// task
const numbers3 = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers3.filter((number) => number % 2 === 0);
const oddNumbers = numbers3.filter((number) => number % 2 !== 0);

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students3 = [
  { name: "Apple", score: 88 },
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const best = students3.filter((student) => student.score > HIGH_SCORE);
console.log(best); // array with 3 object in it

const worst = students3.filter((student) => student.score <= LOW_SCORE);
console.log(worst); // array with 1 object in it

const average = students3.filter(
  (student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE
);
console.log(average); // array with 2 objects in it
