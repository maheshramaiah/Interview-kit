/*
	sum(1)(2)
	sum(1)(2)(3)
*/

function curry(func) {
  const paramLength = func.length;
  let args = [];

  const curried = (value) => {
    args.push(value);

    if (args.length < paramLength) {
      return curried;
    }

    return func(...args);
  };

  return curried;
}

const sum = curry((a, b) => a + b);

console.log(sum(2)(3)(5));

function curryReduce(fn, res) {
  const compute = (value) => {
    res = fn(res, value);

    return curryReduce(fn, res);
  };

  compute.value = res;

  return compute;
}

const sum = curryReduce((ac = 0, value) => ac + value);

const a = sum(1)(2)(3);
const b = a(4)(5);
const c = b(6);

console.log(a.value, b.value, c.value);
