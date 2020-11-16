const showTag = function (arg1, arg2, arg3) {
  console.log("this ", this);
  console.log("this tag ", this.tag);
};
const mango = {
  tag: "Mango",
};

const poly = {
  tag: "Poly",
};

// showTag.call(mango, 1, 2, 3);
// showTag.call(poly, 4, 5, 6);
// showTag.apply(mango, [1, 2, 3]);
// showTag.apply(poly, [4, 5, 6]);

const showMangoTag = showTag.bind(mango);
const showPolyTag = showTag.bind(poly);
showMangoTag();
showPolyTag();
