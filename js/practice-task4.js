const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

const bookTitle = book.title;
console.log(bookTitle); // "The Last Kingdom"

const bookGenres = book.genres;
console.log(bookGenres); // ["historical prose", "adventure"]

const bookPrice = book.price;
console.log(bookPrice); // undefined

console.log(book.title); // "The Last Kingdom"
console.log(book["title"]); // "The Last Kingdom"

console.log(book.genres); // ["historical prose", "adventure"]
console.log(book["genres"]); // ["historical prose", "adventure"]

const propKey = "author";
console.log(book.propKey); // undefined
console.log(book[propKey]); // "Bernard Cornwell"

book.rating = 9;
book.isPublic = false;
book.genres.push("drama");

console.log(book.rating); // 9
console.log(book.isPublic); // false
console.log(book.genres); // ["historical prose", "adventure", "drama"]

book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["ua", "ru"];
book.price = {
  hardcover: 39,
  softcover: 29,
};

console.log(book.pageCount); // 836
console.log(book.originalLanguage); // "en"
console.log(book.translations); // ["ua", "ru"]

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swimming", "music", "sci-fi"],
};

const location = user.location;
console.log(location); // {country: "Jamaica", city: "Ocho Rios"}

const country = user.location.country;
console.log(country); // "Jamaica"

const hobbies = user.hobbies;
console.log(hobbies); // ["swimming", "music", "sci-fi"]
const firstHobby = user.hobbies[0];
console.log(firstHobby); // "swimming"
const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[apartment.tags.length - 1];

console.log(lastTag);

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");

apartment.area = 60;
apartment.rooms = 3;
apartment.location = {}; // Important At first create an empty object
apartment.location = { country: "Jamaica", city: "Kingston" };

console.log(apartment.location.country); // "Jamaica"
console.log(apartment.location.city); // "Kingston"

const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  name,
  price,
  image,
  tags,
};

console.log(product.price); // 2500
console.log(product.tags); // ["on sale", "trending", "best buy"]

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
};

console.log(credentials.email); // "henry.carter@aptmail.com"
console.log(credentials.password); // "jqueryismyjam"

const apartment4 = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = [];
const values = [];

for (const key in apartment4) {
  keys.push(key);
  values.push(apartment4[key]);
}

console.log(keys);
console.log(values);

const oneBook = {
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keysOneBook = Object.keys(oneBook);
console.log(keysOneBook); // ['author', 'genres', 'rating']

for (const key of keysOneBook) {
  console.log(key); // each key of object
  console.log(oneBook[key]); // each value of object
}

const valuesOneBook = [];
for (const key of keysOneBook) {
  valuesOneBook.push(oneBook[key]);
}
console.log(valuesOneBook);

function countProps(object) {
  return Object.keys(object).length;
}
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

const valuesOneBook2 = Object.values(oneBook);
console.log(valuesOneBook2);

function countTotalSalary(salaries) {
  let totalSalary = 0;
  for (const salary of Object.values(salaries)) {
    totalSalary += salary;
  }
  return totalSalary;
}
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // 330

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];
const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}

console.log(hexColors);
console.log(rgbColors);

function getProductPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  // let productPriceToSearchFor = null;

  // for (const product of products) {
  //   if (product.name === productName) {
  //     productPriceToSearchFor = product.price;
  //   }
  // }
  // return productPriceToSearchFor;

  for (const product of products) {
    if (product.name === productName) {
      return product.name;
    }
  }
  return null;
}

console.log(getProductPrice("Scanner")); // 2700
console.log(getProductPrice("Engine")); // null

function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  let propValues = [];

  for (const product of products) {
    if (product[propName]) {
      propValues.push(product[propName]);
    }
  }
  return propValues;
}

console.log(getAllPropValues("name"));
console.log(getAllPropValues("category"));

function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  let totalPrice = 0;

  for (const product of products) {
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
    }
  }
  return totalPrice || `Product ${productName} not found!`;
}

console.log(calculateTotalPrice("Radar")); // 5200
console.log(calculateTotalPrice("Blaster")); // "Product Blaster not found!"
console.log(calculateTotalPrice("Grip")); // 10800

const atTheOldToad = {
  potions: [],
  getPotions() {
    return "List of all available potions";
  },
  addPotion(potionName) {
    return `Adding ${potionName}`;
  },
};

console.log(atTheOldToad.getPotions()); // "List of all available potions"
console.log(atTheOldToad.addPotion("Invisibility")); // "Adding Invisibility"

const bookShelf = {
  books: ["The Last Kingdom", "The Mist"],
  getBooks() {
    console.log(this);
  },
};
bookShelf.getBooks(); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}

const bookShelf2 = {
  books: ["The Last Kingdom", "The Mist"],
  getBooks() {
    return this.books;
  },
};
console.log(bookShelf2.getBooks()); // ["The Last Kingdom", "The Mist"]

const atTheOldToad2 = {
  potions: ["Speed potion", "Stone skin"],
  getPotions() {
    return this.potions;
  },
};

console.log(atTheOldToad2.getPotions()); // ["Speed potion", "Stone skin"]

const bookShelf3 = {
  books: ["The Last Kingdom"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
};
console.log(bookShelf3.getBooks()); // ["The Last Kingdom"]
bookShelf3.addBook("The Mist");
bookShelf3.addBook("Dream Guardian");
console.log(bookShelf3.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]

const atTheOldToad3 = {
  potions: ["Speed potion", "Stone skin"],
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    this.potions.push(potionName);
  },
};
atTheOldToad3.addPotion("Invisibility");
atTheOldToad3.addPotion("Power potion");
console.log(atTheOldToad3.getPotions()); // ["Speed potion", "Stone skin", "Invisibility", "Power potion"]

const atTheOldToad4 = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    this.potions.push(newPotion);
  },
  getTotalPrice() {
    let totalPrice = 0;
    for (const potion of this.potions) {
      totalPrice += potion.price;
    }
    return totalPrice;
  },
};
atTheOldToad4.addPotion({ name: "Invisibility", price: 620 });
console.log(atTheOldToad4.getTotalPrice());

const bookShelf7 = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
  changeRating(bookName, newRating) {
    for (const book of this.books) {
      if (book.title === bookName) {
        book.rating = newRating;
      }
    }
  },
  showRating(bookName) {
    for (const book of this.books) {
      if (book.title === bookName) {
        console.log(book.rating);
      }
    }
  },
};
bookShelf7.changeRating("The Mist", 9);
bookShelf7.changeRating("The Last Kingdom", 4);
console.log(bookShelf7.books[1].rating);
bookShelf7.showRating("The Mist");

//rest
function add(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}
console.log(add(32, 6, 13, 19, 8)); // 78

function addOverNum(value, ...args) {
  const rest = args;
  console.log(value, rest);
  let totalOfLarger = 0;
  for (const arg of args) {
    if (arg > value) {
      totalOfLarger += arg;
    }
  }
  return totalOfLarger;
}
console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); // 218

//spread
const temps = [14, -4, 25, 8, 11];
console.log(...temps); // 14 -4 25 8 11
console.log(Math.max(...temps)); // 25

function getExtremeScores(scores) {
  console.log(...scores); // 89 64 42 17 93 51 26
  return { best: Math.max(...scores), worst: Math.min(...scores) };
}
console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])); // { best: 93, worst: 17 }

const temps2 = [14, -4, 25, 8, 11];
// we make exactly the same but independent copy of the array
const copyOfTemps = [...temps2];
console.log(copyOfTemps); // [14, -4, 25, 8, 11]

const lastWeekTemps = [14, 25, 11];
const currentWeekTemps = [23, 17, 18];
const allTemps = [...lastWeekTemps, ...currentWeekTemps];
console.log(allTemps); // [14, 25, 11, 23, 17, 18]

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
const allScores = [
  ...firstGroupScores,
  ...secondGroupScores,
  ...thirdGroupScores,
];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);
console.log(allScores); // [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
console.log("bestScore:", bestScore, "worstScore:", worstScore); // bestScore: 97 worstScore: 14

// spread of objects
const first = { propA: 5, propB: 10 };
const second = { propC: 15 };
const third = { ...first, ...second };
console.log(third); // { propA: 5, propB: 10, propC: 15 }

const firstBox = { propA: 5, propB: 10, propC: 50 };
const secondBox = { propC: 15 };
const thirdBox = { propB: 20, ...firstBox, ...second };
console.log(thirdBox); // { propA: 5, propB: 10, propC: 15 }
const fourthBox = { ...firstBox, ...secondBox, propB: 20 };
console.log(fourthBox); // { propA: 5, propB: 20, propC: 15 }
const fifthBox = { ...firstBox, propB: 20, ...secondBox };
console.log(fifthBox); // { propA: 5, propB: 20, propC: 15 }

// task
const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
const finalSettings = { ...defaultSettings, ...overrideSettings };

console.log(finalSettings);

// Recursive function is a function that returns the maximum size of the call stack available in the JavaScript runtime in which the code is run

// const factorial = (n) => {
//   if (n === 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// };
// console.log(factorial(10)); // 3628800

// const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));
// console.log(fibonacci(10));
// // 55

// computational properties //

// example 1
const car = {
  price: 8000,
};
const model = "Honda"; // we can receive value
const param = "model";

car[param] = model;
console.log(car);
console.log(car[param]);
console.log(car["model"]);
console.log(car.model);

// example 2
const userApps = {
  app1: "Google disk",
  app2: "Sheets",
  app3: "Docs",
};
const userSelect = "app2";
console.log(userApps[userSelect]);
