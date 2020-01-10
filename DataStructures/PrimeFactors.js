function primeFactors(arr) {
  let cache = {};
  function factors(n, f = []) {
    let is = false;

    for (let i = 2; i <= n / 2; i++) {
      if (n % i === 0) {
        const newF = cache[i] ? cache[i] : factors(i, f);

        f = [...new Set([...f, ...newF])];
        is = true;
      }
    }

    return is || n === 1 ? f : [n];
  }

  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let f = factors(Math.abs(arr[i]));

    for (let j = 0; j < f.length; j++) {
      let value = f[j];

      map[Math.abs(value)] = (map[value] || 0) + arr[i];
    }
  }

  return map;
}

const factors = primeFactors([-29804, -4209, -28265, -72769, -31744]);
const res = Object.entries(factors).map((f) => [+f[0], f[1]]);

console.log(res);
