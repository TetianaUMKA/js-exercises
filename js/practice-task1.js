function calcBMI(weight, height) {
  const preparedWeight = Number(weight.replace(",", "."));
  const preparedHeight = Number(height.replace(",", ".") ** 2);

  const bmi = preparedWeight / preparedHeight;
  console.log(bmi);
  return Math.round(bmi * 10) / 10;
}

const bmi = calcBMI("84,5", "1.85");
console.log(bmi);

function calculateTotal(number) {
  let total = 0;
  while (number > 0) {
    total += number;
    console.log(number);
    number -= 1;
  }
  return total;
}

console.log(calculateTotal(18)); // 171

function calculateTotalFor(number) {
  let total = 0;
  for (let i = 0; i <= number; i += 1) {
    total += i;
  }
  return total;
}

console.log(calculateTotalFor(18)); // 171

// const input = confirm("Are you agree?");

// if (input) {
//   console.log("Cool!😎");
// } else console.log("We are sorry!💩");

// Some interactive practice👇

// function loginPrompt() {
//   const loginInput = prompt("Put your login");
//   return loginInput;
// }
// function passwordPrompt() {
//   const passwordInput = prompt("Fill your password");
//   return passwordInput;
// }
// function reloadPage() {
//   window.location.reload();
// }

// const loginInput = loginPrompt();
// if (loginInput === "global") {
//   const passwordInput = passwordPrompt();
//   if (passwordInput === "321Q") {
//     alert("Your enter is confirmed!✅");
//   } else {
//     alert("Wrong password!❌");
//     if (alert) {
//       reloadPage();
//     }
//   }
// } else {
//   alert("Wrong login!❌");
//   if (alert) {
//     reloadPage();
//   }
// }

// task

const checkValue = "JavaScript";

function getValue(event) {
  console.log(event);
  const userValue = event.target.value;
  console.log(userValue);

  if (userValue.toLowerCase() !== checkValue.toLowerCase()) {
    console.log("Wrong answer!");
  } else console.log("Good job!");
}

userInput.addEventListener("blur", getValue);

// task

const searchValue = "alias";

const loremText = text.innerText;

console.log(text);

if (loremText.includes(searchValue)) {
  console.log("Yes, it includes!👍");
} else console.log("Sorry, it doesn`t contain a search value 🤷🏻‍♀️");

// task

const searchValueIndex = loremText.indexOf(searchValue);

const isStartedWith = loremText[searchValueIndex].startsWith("a");

console.log(isStartedWith);

// task
const userName = "jonas";

function capitalizeFirstLetter(valueToChange) {
  const capitalizedValue =
    valueToChange.slice(0, 1).toUpperCase() + valueToChange.slice(1);
  return capitalizedValue;
}

console.log(capitalizeFirstLetter(userName));
