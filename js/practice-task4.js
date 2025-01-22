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
