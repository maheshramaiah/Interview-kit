/*
	state -> Stopped, Resize, Running
	
	need to resize an entity. entity can be either in stopped or running state.

	1. if entity is in stoped state, need to resize -> start.
	2. if entity is in running state, need to stop -> resize -> start.

	input - {
		status : 'Running'
	}
*/

function fakeApi(status) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(status), 2000);
  });
}

const stateTransition = {
  resizeDone: false,
  transitionStartingState: ['Stopped', 'Running'],
  transition: {
    Stopped: {
      nextAction: 'resize'
    },
    Resize: {
      nextAction: 'start'
    },
    Running: {
      nextAction: 'stop'
    }
  },
  async dispatch(status) {
    const action = this.transition[status];

    if (!action) {
      return;
    }

    try {
      const res = await this.perform[action.nextAction]();

      if (this.resizeDone) {
        console.log('Done');
        return;
      }

      this.dispatch(res);
    } catch (e) {
      console.log(e);
    }
  },
  perform: {
    async stop() {
      console.log('********** Stopping **********');
      return await fakeApi('Stopped');
    },
    async resize() {
      console.log('********** Resizing **********');
      return await fakeApi('Resize');
    },
    async start() {
      console.log('********** Starting **********');
      const res = await fakeApi('Running');

      stateTransition.resizeDone = true;

      return res;
    }
  },
  start(status) {
    if (this.transitionStartingState.includes(status)) {
      this.dispatch(status);
    }
  }
};

stateTransition.start('Running');
