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

// method forEach() always returns undefined
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

// method map() always returns new array

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

// method flatMap()  always returns new array // this method flats a multi-level array into one level

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

// method filter() returns new array which would be contain elements that satisfy the condition of the callback function

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

//task
const books3 = [
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

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
const topRatedBooks = books3.filter((book) => book.rating >= MIN_RATING);
const booksByAuthor = books3.filter((book) => book.author === AUTHOR);
console.table(topRatedBooks);
console.table(booksByAuthor);

//task

const usersData = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
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
    gender: "female",
    age: 39,
  },
];
const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};
console.log(getUsersWithEyeColor(usersData, "blue"));

const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter((user) => user.age >= minAge && user.age <= maxAge);
};
console.log(getUsersWithAge(usersData, 24, 35));

// method find()

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

colorPickerOptions.find((option) => option.label === "blue"); // { label: "blue", color: "#2196F3" }
colorPickerOptions.find((option) => option.label === "pink"); // { label: "pink", color: "#E91E63" }
colorPickerOptions.find((option) => option.label === "white"); // undefined

const books4 = [
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
];
const BOOK_TITLE = "The Dream of a Ridiculous Man";
const AUTHOR1 = "Robert Sheckley";
const bookWithTitle = books4.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books4.find((book) => book.author === AUTHOR1);
console.log(bookWithTitle);
console.log(bookByAuthor);

// method every()

console.log([1, 2, 3, 4, 5].every((value) => value >= 0)); // true
console.log([1, 2, 3, -10, 4, 5].every((value) => value >= 0)); // false

const products = [
  { name: "apple", quantity: 2 },
  { name: "orange", quantity: 5 },
  { name: "plum", quantity: 0 },
];
const hasEveryProduct = products.every((product) => product.quantity > 0);
console.log(hasEveryProduct); // false

// method some()

console.log([1, 2, 3, 4, 5].some((value) => value >= 0)); // true
console.log([-7, -20, 3, -10, -14].some((value) => value >= 0)); // true
console.log([1, 2, 3, 4, 5].some((value) => value < 0)); // false

const users5 = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];
const isAnyUserActive = (users) => {
  return users5.some((user) => user.isActive);
};
console.log(isAnyUserActive());

// method reduce()

// array.reduce((previousValue, element, index, array) => {}initialValue); //

const total = [2, 7, 3].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 12

// task
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((previousTotalPlayTime, playTime) => {
  return previousTotalPlayTime + playTime;
}, 0);

const averagePlayTime = totalPlayTime / playtimes.length;
console.log(averagePlayTime);

// task
const students4 = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
  { name: "Houston", score: 64 },
];

const totalScore = students4.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students4.length;
console.log(averageScore);

// task
const players2 = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 469, gamesPlayed: 2 },
  { name: "Ajax", playtime: 690, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players2.reduce((acc, player) => {
  return acc + player.playtime / player.gamesPlayed;
}, 0);

console.log(totalAveragePlaytimePerGame);

// task
const calculateTotalBalance = (users) => {
  return users.reduce((previousAcc, user) => {
    return previousAcc + user.balance;
  }, 0);
};
console.log(
  calculateTotalBalance([
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male",
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female",
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male",
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female",
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male",
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male",
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female",
    },
  ])
);

// method toSorted() // array.toSorted() according to Unicode, but we have some difficulties

const scores = [27, 2, 41, 4, 7, 3, 75];
console.log(scores.toSorted()); // [2, 27, 3, 4, 41, 7, 75]

const fruits = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
console.log(fruits.toSorted()); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

const letters = ["b", "B", "a", "A", "c", "C"];
console.log(letters.toSorted()); // ["A", "B", "C", "a", "b", "c"]

// task
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];

const ascendingReleaseDates = releaseDates.toSorted();
const alphabeticalAuthors = authors.toSorted();
console.log(ascendingReleaseDates); // [1967, 1973, 1984, 1997, 2008, 2012, 2016]
console.log(alphabeticalAuthors); // ['Bernard Cornwell', 'Fyodor Dostoevsky', 'Robert Sheckley', 'Tanith Lee']

// creating your own order by adding a compare callback function helps avoid difficulties

const scores2 = [61, 19, 74, 35, 92, 56];
// up = ascending
const ascendingScores = scores2.toSorted((a, b) => a - b);
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
// down = descending
const descendingScores = scores.toSorted((a, b) => b - a);
console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

// task

const releaseDates2 = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates2 = releaseDates2.toSorted();
console.log(ascendingReleaseDates2);
const descendingReleaseDates2 = releaseDates2.toSorted((a, b) => b - a);
console.log(descendingReleaseDates2);

// method localeCompare() // as callback function for toSorted()
// firstString.localeCompare(secondString) //

console.log("a".localeCompare("b")); // -1
console.log("b".localeCompare("a")); // 1
console.log("a".localeCompare("a")); // 0
console.log("b".localeCompare("b")); // 0

const students5 = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

const inAlphabetOrder = students5.toSorted((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

const inReversedOrder = students5.toSorted((a, b) => b.localeCompare(a));
console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]

// task
const authors2 = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
  "Howard Lovecraft",
];
const authorsInAlphabetOrder = authors2.toSorted();
console.log(authorsInAlphabetOrder);

const authorsInReversedOrder = authors2.toSorted((a, b) => b.localeCompare(a));
console.log(authorsInReversedOrder);

// an example of the use with the array of objects

const students6 = [
  { name: "Mango", score: 83 },
  { name: "Poly", score: 59 },
  { name: "Ajax", score: 37 },
  { name: "Kiwi", score: 94 },
];

const inAscendingScoreOrder = students6.toSorted(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);
console.log(inAscendingScoreOrder);

const inDescendingScoreOrder = students6.toSorted(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);
console.log(inDescendingScoreOrder);

const inAlphabeticalOrder = students6.toSorted((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);
console.log(inAlphabeticalOrder);

// task

const books5 = [
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
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    rating: 7.94,
  },
  {
    title: "Enemy of God",
    author: "Bernard Cornwell",
    rating: 8.67,
  },
];
const sortedByAuthorName1 = books5.toSorted((firstBook, secondBook) =>
  firstBook.author.localeCompare(secondBook.author)
);
console.log(sortedByAuthorName1);

const sortedByReversedAuthorName1 = books5.toSorted((firstBook, secondBook) =>
  secondBook.author.localeCompare(firstBook.author)
);
console.log(sortedByReversedAuthorName1);

const sortedByAscendingRating1 = books5.toSorted(
  (firstBook, secondBook) => firstBook.rating - secondBook.rating
);
console.log(sortedByAscendingRating1);

const sortedByDescendingRating1 = books5.toSorted(
  (firstBook, secondBook) => secondBook.rating - firstBook.rating
);
console.log(sortedByDescendingRating1);

// chaining

const students7 = [
  { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
  { name: "Poly", score: 59, courses: ["science", "mathematics"] },
  { name: "Ajax", score: 37, courses: ["physics", "biology"] },
  { name: "Kiwi", score: 94, courses: ["literature", "science"] },
];

const names1 = students7
  .toSorted((a, b) => a.score - b.score)
  .map((student) => student.name);

console.log(names1); // ["Ajax", "Poly", "Mango", "Kiwi"]

const uniqueSortedCourses = students7
  .flatMap((student) => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .toSorted((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]

const allCourses = students7.flatMap((student) => student.courses);
console.log(allCourses);
const uniqueFilteredCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index
);
console.log(uniqueFilteredCourses);

let uniqueFilteredCourses2 = [];

for (let i = 0; i < allCourses.length; i += 1) {
  if (allCourses.indexOf(allCourses[i]) === i) {
    uniqueFilteredCourses2.push(allCourses[i]);
    console.log(allCourses.indexOf(allCourses[i]));
    console.log(i);
  }
}
console.log(uniqueFilteredCourses2);

// task
const books6 = [
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
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names2 = books6
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .map((book) => book.author)
  .toSorted((a, b) => a.localeCompare(b));

// addition practice for module #5
// task 1

function eachElement(array, callback) {
  const newArray = [];
  array.forEach((eachValue) => newArray.push(callback(eachValue)));
  return newArray;
}

console.log(
  eachElement([56, 87, 34, 96, 23], function (value) {
    return value * 2;
  })
);

console.log(
  eachElement([56, 87, 34, 96, 23], function (value) {
    return value - 10;
  })
);

console.log(
  eachElement([56, 87, 34, 96, 23], function (value) {
    return Math.sqrt(value);
  })
);
console.log(
  eachElement([2, 3, 5, 9, 7], function (value) {
    return Math.pow(value, 5);
  })
);

console.log(
  eachElement([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  })
);

console.log(
  eachElement([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value))
);

// task 2
const arrowPossibility = (...args) => args.map((value) => value * 2);

console.log(arrowPossibility(67, 346, 985, 234, 98, 25));

// examples
const model = "Toyota";
const price = "15000 USD";
const yearsOld = "8";
const withPhoto = true;

const carToSell = {
  model,
  price,
  yearsOld,
};

console.log(carToSell);

carToSell["withPhoto"] = withPhoto;

console.log(carToSell);

const propertyName = "color";
carToSell[propertyName] = "black";

console.log(carToSell);

// Operator in -> Boolean
console.log("price" in carToSell); // true
console.log("something" in carToSell); // false

for (const key in carToSell) {
  console.log(key); // model // price // yearsOld // withPhoto // color
  console.log(carToSell[key]); // Toyota // 15000 USD // 8 // true // black
}

// task
const players3 = {
  Den: 60,
  Kate: 130,
  William: 45,
  Matthew: 120,
  Ethan: 40,
  David: 55,
};

function getAverageTime(players) {
  const playersTime = Object.values(players);
  let totalPlayTime = 0;
  for (const playerTime of playersTime) {
    totalPlayTime += playerTime;
  }

  return `Count of players ${playersTime.length}, average time ${
    totalPlayTime / playersTime.length
  }`;
}

console.log(getAverageTime(players3));

// task
function getOnlineFriends(allFriends) {
  const onlineFriends = [];
  for (const friend of allFriends) {
    if (friend.isOnline) {
      onlineFriends.push(friend.name);
    }
  }
  return onlineFriends;
}

console.log(
  getOnlineFriends([
    { name: "Jones", isOnline: false },
    { name: "Emma", isOnline: true },
    { name: "Anna", isOnline: false },
    { name: "Max", isOnline: false },
    { name: "Ozi", isOnline: true },
    { name: "Eddy", isOnline: false },
  ])
);

// task
const goodsStore = [
  { name: "dress", price: 1200, quantity: 34 },
  { name: "shirt", price: 960, quantity: 63 },
  { name: "coat", price: 3800, quantity: 21 },
  { name: "skirt", price: 870, quantity: 89 },
  { name: "jacket", price: 2900, quantity: 48 },
  { name: "trousers", price: 1450, quantity: 52 },
];

function calcBasketTotalPrice(store, basket) {
  let totalPrice = 0;
  for (const item of basket) {
    const neededGoods = store.find((goods) => goods.name === item.name);
    totalPrice += neededGoods.price * item.quantity;
  }
  return totalPrice;
}

console.log(
  calcBasketTotalPrice(goodsStore, [
    { name: "dress", quantity: 1 },
    { name: "skirt", quantity: 1 },
    { name: "shirt", quantity: 2 },
    { name: "trousers", quantity: 1 },
  ])
);

// task
const playList = {
  name: "My amazing play list",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  changeName(newName = "Relax playList") {
    this.name = newName;
  },
  addTrack(track) {
    this.tracks.push(track);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTracksCount() {
    return this.tracks.length;
  },
};

const newPlayList = {
  ...playList,
  name: "Relax",
};

playList.changeName();
newPlayList.changeName("Training");

console.log(playList);
console.log(newPlayList);

playList.addTrack("new track");
playList.updateRating(8);
console.log(playList.getTracksCount());

// task
const defaultSettings = {
  showNotifications: true,
  hideSidebar: false,
  theme: "light",
};

const userSettings = {
  showNotifications: false,
  hideSidebar: false,
  theme: "dark",
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

console.log(finalSettings);

// task
function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 6 },
    { name: "Scanner", price: 2700, quantity: 8 },
    { name: "Droid", price: 700, quantity: 4 },
  ];

  const values = [];

  for (const product of products) {
    // way #1
    // if (product[propName] === undefined) {
    //   return values;
    // }
    // values.push(product[propName]);
    // way #2
    // if (propName in product) values.push(product[propName]);
    // way #3
    if (product[propName]) {
      values.push(product[propName]);
    }
  }

  return values;
}

console.log(getAllPropValues("price"));
console.log(getAllPropValues("wrong"));

// task

const allCars = [
  {
    make: "Honda",
    model: "CR-V",
    amount: 14,
    price: 24045,
    hasGuarantee: true,
  },
  {
    make: "Honda",
    model: "Accord",
    amount: 2,
    price: 22455,
    hasGuarantee: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    amount: 8,
    price: 24195,
    hasHistory: true,
  },
  { make: "Mazda", model: "CX-9", amount: 7, price: 31520, hasGuarantee: true },
  {
    make: "Toyota",
    model: "4Runner",
    amount: 19,
    price: 34210,
    hasGuarantee: true,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    amount: 16,
    price: 45560,
    hasGuarantee: true,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    amount: 4,
    price: 24320,
    hasGuarantee: false,
  },
  {
    make: "Ford",
    model: "F-150",
    amount: 11,
    price: 27110,
    hasGuarantee: false,
  },
  {
    make: "Ford",
    model: "Fusion",
    amount: 13,
    price: 22120,
    hasGuarantee: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    amount: 6,
    price: 31660,
    hasGuarantee: true,
  },
];

const getModels = (cars) => cars.map((car) => car.model);
console.log(getModels(allCars));

const makeCarsWithDiscount = (cars, discount) =>
  cars.map((car) => ({ ...car, price: car.price * (1 - discount) }));
console.log(makeCarsWithDiscount(allCars, 0.2));

/**
 * Function represent filtered objects
 * @param {Array} cars
 * @param {String} brand
 * @returns array of objects or empty array
 */
const filteredByBrand = (cars, brand) =>
  cars.filter((car) => car.make === brand);
console.log(filteredByBrand(allCars, "Mazda"));
console.log(filteredByBrand(allCars, "Toyota"));

const filteredByPrice = (cars, lowPrice, highPrice) =>
  cars.filter((car) => car.price >= lowPrice && car.price <= highPrice);
console.log(filteredByPrice(allCars, 25000, 32000));
console.log(filteredByPrice(allCars, 0, 28000));

const getCarByModel = (cars, model) => cars.find((car) => car.model === model);
console.log(getCarByModel(allCars, "CX-9"));

const hasGuarantee = allCars.every((car) => car.hasGuarantee);
console.log(hasGuarantee); // false

const hasGuarantee2 = allCars.some((car) => car.hasGuarantee);
console.log(hasGuarantee2); // true

// using reduce
const warehouseTotalPrice = allCars.reduce((acc, car) => {
  return (acc += car.amount * car.price);
}, 0);
console.log(warehouseTotalPrice); // 3047700

// using forEach
const countWarehouseTotalPrice = (cars) => {
  let warehouseTotalPrice = 0;
  cars.forEach((car) => (warehouseTotalPrice += car.amount * car.price));
  return warehouseTotalPrice;
};
console.log(countWarehouseTotalPrice(allCars)); // 3047700

const sortedByLowerCarPrice = allCars.toSorted((curCar, nextCar) => {
  return curCar.price - nextCar.price;
});
console.log(sortedByLowerCarPrice);

const sortedByHigherCarPrice = allCars.toSorted(
  (curCar, nextCar) => nextCar.price - curCar.price
);
console.log(sortedByHigherCarPrice);

const sortedByAlphabet = allCars.toSorted((curCar, nextCar) =>
  curCar.make.localeCompare(nextCar.make)
);
console.log(sortedByAlphabet);

// other tasks
const numbers5 = [3, 14, 78, 45, 63, 89, 78, 3];
const filteredNumbers5 = numbers5.filter((number, idx, arr) => {
  console.log(arr.indexOf(number), idx);
  return arr.indexOf(number) === idx;
});
console.log(filteredNumbers5);

const total5 = numbers5.reduce((acc, number, idx, arr) => {
  return (acc += number);
}, 0);
console.log(total5);

const sortedResult = numbers5.toSorted((curEl, nextEl) => {
  return curEl - nextEl;
});
console.log(sortedResult);

const sortedResult2 = numbers5.toSorted((curEl, nextEl) => {
  return nextEl - curEl;
});
console.log(sortedResult2);

// to avoid code crashing we can use the "?" command
console.log(allCars[0].color?.toLowerCase());

const allSalary = {
  jones: 18700,
  smith: 23600,
  brown: 65000,
  lee: 35200,
  green: 24300,
};

const totalSalary = Object.values(allSalary).reduce((acc, salary) => {
  return (acc += salary);
}, 0);
console.log(totalSalary);

const allCars2 = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

const getAvailableCarNames = (cars) => cars.filter((car) => car.onSale);
console.log(getAvailableCarNames(allCars2));

const getSortedCarsOnSale = (cars) =>
  cars.filter((car) => car.onSale).toSorted((a, b) => a.price - b.price);
console.log(getSortedCarsOnSale(allCars2));

const getSortedCarsOnSaleByAlphabet = (cars) =>
  cars
    .filter((car) => car.onSale && car.price < 25000)
    .toSorted((a, b) => a.model.localeCompare(b.model));
console.log(getSortedCarsOnSaleByAlphabet(allCars2));
