class StateMachine {
  constructor(config) {
    this.current = config.initial;
    this.states = config.states;
    this.actions = config.actions;
  }

  async start() {
    const state = this.states[this.current];

    if (state.next) {
      this.current = state.next;
      const nextState = this.states[this.current];

      if (nextState.action) {
        try {
          const res = await Promise.all(
            nextState.action.map((ac) => this.actions[ac]())
          );
          console.log(res);
          this.start();
        } catch (err) {
          throw err;
        }
      }
    }
  }
}

const config = {
  initial: 'running',
  states: {
    running: {
      next: 'stop'
    },
    stop: {
      action: ['stop'],
      next: 'resize'
    },
    resize: {
      action: ['resize'],
      next: 'start'
    },
    start: {
      action: ['start']
    }
  },
  actions: {
    stop: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('VM Stopped');
        }, 1000);
      });
    },
    resize: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('VM resized');
        }, 1000);
      });
    },
    start: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('VM started');
        }, 1000);
      });
    }
  }
};

const obj = new StateMachine(config);

obj.start();
