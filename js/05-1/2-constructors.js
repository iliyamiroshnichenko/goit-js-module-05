const User = function (name, sales) {
  this.name = name;
  this.sales = sales;
};

User.prototype.sell = function () {
  this.sales += 1;
}

const vasya = new User('Vasya', 50);
console.log(vasya);
vasya.sell();
console.log(vasya);
// const petya = new User("Petya",100);
// console.log(petya.sales);