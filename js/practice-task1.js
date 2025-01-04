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
