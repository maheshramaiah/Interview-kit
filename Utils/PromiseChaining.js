const { CPromise, MyPromise } = require('./CustomPromise');

function exec() {
  return new MyPromise((resolve, reject) => {
    // setTimeout(() => resolve(1), 1000);
    resolve(1);
  })
    .then((a) => {
      return new MyPromise((resolve) => {
        // setTimeout(() => resolve(a + 1), 1000);
        resolve(a + 1);
      });
      // return (a + 1);
    })
    .then((res) => {
      return res;
    });
}

const res = exec();

res.then(console.log);
// console.log(res.instance);

// function fakePromise(n) {
// 	return new Promise(resolve => {
// 		setTimeout(() => {
// 			resolve(n + 1);
// 		}, 1000);
// 	});
// }

// const promises = [
// 	fakePromise,
// 	fakePromise,
// 	function() {
// 		throw 'Hai';
// 	}
// ];

// promises.reduce((chain, promise) => {
// 	return chain.then(res => {
// 		console.log(res);
// 		return promise(res);
// 	})
// }, Promise.resolve(1))
// 	.then(res => console.log(res))
// 	.catch(err => console.log(err));
