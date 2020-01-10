function debounce(fn, time) {
  let timeout;

  return function(...args) {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => fn.apply(null, args), time);
  };
}

function test(a) {
  console.log('hai', a);
}

const debouncefn = debounce(test, 1000);

for (let i = 0; i <= 5; i++) {
  debouncefn(i);
}
