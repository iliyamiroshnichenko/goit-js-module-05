import cart from "./03-1/3-cart.js";

document.querySelector(".js-show-cart").addEventListener("click", () => {
  console.table(cart.getItems());
});
document
  .querySelector('button[data-product="Apple"]')
  .addEventListener("click", cart.add.bind(cart, { name: "Apple", price: 50 }));
