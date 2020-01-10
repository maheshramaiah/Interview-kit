class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(key, fn) {
    if (!this.events[key]) {
      this.events[key] = [];
    }

    this.events[key].push(fn);

    return () => {
      this.events[key] = this.events[key].filter((event) => event !== fn);
    };
  }

  emit(key, data) {
    if (this.events[key]) {
      this.events[key].forEach((event) => event(data));
    }
  }
}

const emitter = new EventEmitter();

const subscriber1 = emitter.subscribe('test', (data) => console.log(data));

emitter.emit('test', 'hai');
subscriber1();