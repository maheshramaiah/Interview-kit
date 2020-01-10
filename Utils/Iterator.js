/**
	const a = 'abcd'

	When we do [...a] or for(const value of a) {}

	1. a should be iterable
	2. It should have property called Symbol.iterator, which should be a generator function

	a[Symbol.iterator] = function*() {
		yield 'a';
		yield 'b';
		yield 'c';
		yield 'd';
	}

			OR

	a[Symbol.iterator] = function() {
		const arr = this.split('');

		return {
			next() {
				return {
					value: arr.shift(),
					done: arr.length === 0
				};
			}
		}
	}

	Generator 

	function * generator() {
		yield 1;
		yield 2;
	}

	const it1 = generator(); //iterator


 	Custom generator

	function customGenerator() {
		return {
			next() {
				return {
					value: undefined,
					done: true
				}
			}
		};
	}

	const it2 = customGenerator();


*/

/* spread, for of -> behind the scenes */

function operator(s) {
  const it = s[Symbol.iterator]();
  const arr = [];

  while (true) {
    const { value, done } = it.next();

    if (done) {
      break;
    }

    arr.push(value);
  }

  return arr;
}

console.log(operator('abcd'));
