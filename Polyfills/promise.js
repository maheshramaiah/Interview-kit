class Promise1 {
  constructor(exec) {
    this.state = 'PENDING';
    this.handlers = [];
    this.value = null;
    exec(this._resolve.bind(this));
  }

  _execute() {
    this.handlers.forEach((handler) => {
      const res = handler.successFn(this.value);

      if (res && res.then) {
        res.then((value) => handler.promise._resolve(value));
      } else {
        handler.promise._resolve(res);
      }
    });
  }

  _resolve(data) {
    if (this.state === 'PENDING') {
      this.state = 'FULFILLED';
      this.value = data;
      this._execute();
    }
  }

  then(successFn) {
    const pr = new Promise1(() => {});

    this.handlers.push({
      successFn,
      promise: pr
    });

    if (this.state === 'FULFILLED') {
      this._execute();
    }

    return pr;
  }
}

new Promise1((resolve) => {
  resolve(1);
})
  .then((data) => {
    return data + 1;
  })
  .then((data) => {
    console.log(data);
  });
