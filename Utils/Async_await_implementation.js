function fakeApi(text, time) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(text), time);
  });
}

const pr = [fakeApi(1, 3000), fakeApi(2, 1000), fakeApi(3, 2000)];

// async function main() {
// 	const pr1 = pr[0];
// 	const pr2 = pr[1];
// 	const pr3 = pr[2];

// 	console.log(await pr1);
// 	console.log(await pr2);
// 	console.log(await pr3);
// }

// main();

function* gen() {
  const pr1 = pr[0];
  const pr2 = pr[1];
  const pr3 = pr[2];

  console.log(yield pr1);
  console.log(yield pr2);
  console.log(yield pr3);
}

function runner(gen) {
  const itr = gen();

  function run(args) {
    const res = itr.next(args);

    if (res.done) {
      return;
    } else {
      Promise.resolve(res.value).then(run);
    }
  }

  run();
}

runner(gen);
