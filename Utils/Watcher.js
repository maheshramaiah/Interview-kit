function watcher(oldValue, newValue) {
  if (oldValue !== newValue) {
    console.log('Value Changed');
  }
}

const obj = {
  a: 1
};

const proxy = new Proxy(obj, {
  set(obj, prop, value) {
    watcher(obj[prop], value);
    return true;
  }
});

proxy.a = 2;
