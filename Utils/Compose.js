// function compose(...fns) {
// 	return fns.reduce((y, f) => {
// 		return (...args) => {
// 			return y(f(...args));
// 		}
// 	});
// }

// function trace(label) {
// 	return (val) => {
// 		console.log(`${label}: ${val}`);
// 		return val;
// 	}
// }

// const ex = compose(
// 	trace('after 1'),
// 	(val) => `1<${val}>`,
// 	trace('after 2'),
// 	(val) => `2<${val}>`,
// 	trace('after 3'),
// 	(val) => `3<${val}>`
// );

// console.log(ex('hello'));

/*
	fns = [a, b, c];

	ex = (args) => a(b(c(args)))
*/

function compose(...fns) {
  return fns.reduceRight((ac, fn) => {
    return (...args) => {
      return fn(ac(...args));
    };
  });
}

const a = (val) => `1<${val}>`;
const b = (val) => `2<${val}>`;
const c = (val) => `3<${val}>`;

const composeFn = compose(
  a,
  b,
  c
);

console.log(composeFn('Hello'));

/**

with reduceright

step1 :
ac = c
fn = b

output = (...args) => b(c(...args))

step2 :
ac = (...args) => b(c(...args))
fn = a

output = (...args) => a(b(c(...args)))

with reduce

step1 :
ac = a
fn = b

output = (...args) => a(b(...args))

step2
ac = (...args) => a(b(...args))
fn = c

output = (...args) => a(b(c(...args)))

*/
