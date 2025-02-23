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
