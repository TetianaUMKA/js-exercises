// a primitive data type is assigned by value // address is in Call Stack
const a = "origin";
let b = a;
console.log(a === b); // true
console.log(b); // 'origin'

b = 100000;
console.log(b, a); // 1000 'origin'

// a Non-Primitive data type by reference // address is in Memory Heap
const array1 = [100, 200, 400];
const array2 = array1;
console.log(array1, array2);
console.log(array1 === array2); // true

array2[1] === 600;
console.log(array1 === array2); // true

const array3 = [300, 700, 900];
const array4 = [300, 700, 900];

console.log(array3 === array4); // false

// Type Coercion and Type Casting

const array = [1, true, "Poly"];
console.log(String(array)); // "1,true,Poly"
console.log(array + "5"); // "1,true,Poly5"

console.log(Number([])); // 0
console.log(Number([1])); // 1
console.log(Number([1, 2, 3])); // NaN

const emptyArray = [];
const nonEmptyArray = [1, 2, 3];

console.log(Boolean(emptyArray)); // true
console.log(Boolean(nonEmptyArray)); // true

function getLength(array) {
  return array.join("").length;
}

getLength(["Mango", "hurries", "to", "the", "train"]); // 22
getLength(["M", "a", "n", "g", "o"]); // 5
getLength(["top", "picks", "for", "you"]); // 14

function transformString(string) {
  const words = string.split("_");
  // console.log(words); // ['price', 'per', 'droid']
  return words.join("-");
}

transformString("price_per_droid"); // "price-per-droid"

const fruitName = "Mango";
const letters = fruitName.split("");
console.log(letters); // ["M", "a", "n", "g", "o"]

const message = "JavaScript essentials";
const words = message.split(" ");
// console.log(words); // ["JavaScript", "essentials"]

const slug = "amazing-french-recipes";
const slugParts = slug.split("-");
// console.log(slugParts); // ["amazing", "french", "recipes"]

function calculateEngravingPrice(message, pricePerWord) {
  return message.split(" ").length * pricePerWord;
}

calculateEngravingPrice("JavaScript is in my blood", 10); // 50
calculateEngravingPrice("Web-development is creative work", 40); // 160

const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
console.log(planets.slice(2)); // ["Venus", "Jupiter", "Saturn"]
console.log(planets.slice(-2)); // ["Jupiter", "Saturn"]
console.log(planets.slice()); // ["Earth", "Mars", "Venus", "Jupiter", "Saturn"]

const fruits = ["apple", "plum", "pear", "orange", "banana"];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(-3);

console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);

const firstArray = ["Mercury", "Venus"];
const secondArray = ["Mars", "Jupiter"];
const result = firstArray.concat(secondArray);

console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];

const thirdArray = ["Saturn", "Neptune"];
console.log(firstArray.concat(thirdArray, secondArray));
// ['Mercury', 'Venus', 'Saturn', 'Neptune', 'Mars', 'Jupiter', ]; // Order is important!

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];

const allClients = oldClients.concat(newClients);

const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
console.log(clients.indexOf("Poly")); // 2
console.log(clients.indexOf("Monkong")); // -1

function getSlice(array, value) {
  const valueIndex = array.indexOf(value);
  return valueIndex === -1 ? [] : array.slice(0, valueIndex + 1);
}
console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax")); // ["Mango", "Poly", "Ajax"]

const planets2 = ["Earth", "Mars", "Venus"];

planets2.push("Jupiter");
console.log(planets2); // ['Earth', 'Mars', 'Venus', 'Jupiter']

planets2.push("Saturn", "Neptune");
console.log(planets2); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]

const tags = [];

for (let i = 0; i < 3; i += 1) {
  tags.push(`tag-${i}`);
}

console.log(tags); // ["tag-0", "tag-1", "tag-2"]

function createArrayOfNumbers(min, max) {
  let arrayOfNumbers = [];
  for (let i = min; i <= max; i += 1) {
    arrayOfNumbers.push(i);
  }
  return arrayOfNumbers;
}

console.log(createArrayOfNumbers(14, 17)); // [14, 15, 16, 17]
console.log(createArrayOfNumbers(29, 34)); // [29, 30, 31, 32, 33, 34]

const planets3 = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets3.length; i += 1) {
  console.log(planets3[i]);
}

function calculateTotalPrice(order) {
  let total = 0;
  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }
  return total;
}
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

function getEvenNumbers(start, end) {
  let evenNumbers = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}
console.log(getEvenNumbers(3, 11)); // [4, 6, 8, 10]
console.log(getEvenNumbers(7, 7)); // []

const planets4 = ["Earth", "Mars", "Venus"];
console.log(planets4.includes("Mars")); // true
console.log(planets4.includes("Jupiter")); // false

function checkStorage(storage, item) {
  const formatItem = item.toLowerCase();
  if (storage.includes(formatItem)) {
    return `${formatItem} is available to order!`;
  } else {
    return "Sorry! We are out of stock!";
  }
}
console.log(checkStorage(["apple", "plum", "pear"], "pLuM")); // "plum is available to order!"

function getCommonElements(array1, array2) {
  const commonArray = [];

  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      commonArray.push(array1[i]);
    }
  }
  return commonArray;
}
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
