function compare(a, b) {
  if (!a || !b || a.length !== b.length) {
    return false;
  }

  if (a === b) {
    return true;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

function memoize(fn) {
  const paramLength = fn.length;
  let lastArgs = null;
  let res = null;
  let computation = 0;
  const memo = (...args) => {
    if (paramLength !== args.length) {
      throw 'Arguments do not match';
    }

    if (!compare(lastArgs, args)) {
      computation++;
      lastArgs = args;
      res = fn(...lastArgs);
    }

    return res;
  };

  memo.getComputations = () => computation;

  return memo;
}

const data = {
  a: [1, 2, 3, 4]
};
const filter = memoize((a) => a.filter((x) => x % 2 === 0));

console.log(filter(data.a));
console.log(filter([1, 2, 3, 4]));
console.log(filter.getComputations());
