function throttle(fn, time) {
  let flag = true;

  return function(...args) {
    if (flag) {
      fn.apply(this, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, time);
    }
  };
}

function test(a) {
  console.log(a);
}

const throttleFn = throttle(test, 1000);

throttleFn(1);
throttleFn(2);

setTimeout(() => {
  throttleFn(3);
}, 2000);
