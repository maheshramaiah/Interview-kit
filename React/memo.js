function compare(a, b) {
  if (!a.length || !b.length) {
    return false;
  }
  for (let i = 0; i < a.length; a++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

function memo(fn) {
  let dependencies = [];
  let res;
  let computation = 0;

  const compute = (...args) => {
    if (!compare(dependencies, args)) {
      dependencies = args;
      res = fn(...args);
      compute.computation = ++computation;
    }

    return res;
  };

  return compute;
}

function sum(a, b) {
  return a + b;
}

const memoFn = memo((a, b) => sum(a, b));

console.log(memoFn(10, 20));
console.log(memoFn(11, 20));
console.log(memoFn.computation);
