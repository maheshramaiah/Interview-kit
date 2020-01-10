/*
	Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :
	"(p1**n1)(p2**n2)...(pk**nk)"

	Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
*/

function primeFactors(n) {
  const factors = (function getFactors(no = n, factors = {}) {
    let isPrime = true;

    for (let i = 2; i <= no / 2; i++) {
      if (no % i === 0) {
        isPrime = false;
        factors[i] = factors[i] ? factors[i] + 1 : 1;
        getFactors(no / i, factors);
        break;
      }
    }

    if (isPrime) {
      factors[no] = factors[no] ? factors[no] + 1 : 1;
    }

    return factors;
  })();

  return Object.entries(factors).reduce(
    (res, [no, occurance]) =>
      (res += occurance === 1 ? `(${no})` : `(${no}**${occurance})`),
    ''
  );
}

console.log(primeFactors(8788));
