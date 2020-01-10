function compare(a, b) {
  if (!a || !b || a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
}

function memoize(func) {
  let lastArgs = null;
  let res = null;

  return (params) => {
    if (!compare(lastArgs, params)) {
      lastArgs = params;
      res = func(...lastArgs);
    }

    return res;
  };
}

function memo(params = [], resFunc) {
  let computation = 0;
  const memoizeFunc = memoize(function(...args) {
    computation++;
    return resFunc(...args);
  });
  const res = (data) => memoizeFunc(params.map((p) => p(data)));

  res.getComputations = () => computation;

  return res;
}

const state = {
  a: [1, 2, 3, 4],
  b: [5, 6, 7, 8]
};
const mem = memo([(state) => state.a, (state) => state.b], (a, b) =>
  [...a, ...b].reduce((ac, value) => ac + value, 0)
);

console.log(mem(state));
console.log(mem({ ...state, b: [9, 10, 11, 12] }));
console.log(mem.getComputations());
