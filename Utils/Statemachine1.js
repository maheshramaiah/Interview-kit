class StateMachine {
  constructor(config, startingState) {
    this.states = config.states;
    this.initialStates = config.initialStates;
    this.currentState = startingState;
    this.finish = false;
  }

  async perform() {
    const state = this.states[this.currentState];

    if (state) {
      const res = await state.perform();

      if (state.next && !this.finish) {
        this.currentState = state.next;
        this.perform(res);
        state.afterAction && state.afterAction();
      }
    }
  }

  start() {
    if (this.initialStates.includes(this.currentState)) {
      const state = this.states[this.currentState].next;

      if (state) {
        this.currentState = state;
        this.perform();
      }
    }
  }

  setFinish() {
    this.finish = true;
  }
}

const config = {
  initialStates: ['start', 'stop'],
  states: {
    resize: {
      perform: (res) => {
        return new Promise((resolve) => {
          console.log('Resize');
          resolve();
        });
      },
      afterAction() {
        obj.setFinish();
      },
      next: 'start'
    },
    start: {
      perform: (res) => {
        return new Promise((resolve) => {
          console.log('Start');
          resolve();
        });
      },
      next: 'stop'
    },
    stop: {
      perform: (res) => {
        return new Promise((resolve) => {
          console.log('Stop');
          resolve();
        });
      },
      next: 'resize'
    }
  }
};

const obj = new StateMachine(config, 'start');

obj.start();
