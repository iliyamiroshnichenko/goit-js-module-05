/*
* Global env
* Record: {}
* Parent: null
*/
// Environment: Global env
const foo = function () {
  /*
   * Foo env
   * Record: {}
   * Parent: Global env
   */
  const x = 5;
  /*
   * Foo env
   * Record: {x: 5}
   * Parent: Global env
   */
  // Environment: Foo env
    return function () {
      /*
       * Anon env
       * Record: {}
       * Parent: Foo env
       */
      console.log(x);
    };
}
/*
* Global env
* Record: {foo: f}
* Parent: null
*/
const outerFn = foo();
/*
* Global env
* Record: {foo: f, outerFn: f}
* Parent: null
*/
console.log(outerFn);
outerFn();



const makeDish = function (shefname, dish) {
    console.log(`${shefname} готовит ${dish}`);
}

makeDish('Вася', 'рыбу');

const makeShef = function (name) {
    return function (dish) {
        console.log(`${name} готовит ${dish}`);
     };
}
const mango = makeShef('Mango');
const poly = makeShef("Poly");
mango("котлеты");
poly("паштет");
console.dir(mango)


const fnA = function (a) {
    return function fnB(b) {
        return function fnC(c) {
            console.log(a, b, c);
        }
    }
}
const res = fnA(5)(145);
res(98)
console.dir(res);