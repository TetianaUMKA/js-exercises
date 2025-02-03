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
