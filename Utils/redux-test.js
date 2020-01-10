const { createStore, applyMiddleware } = require('redux');

function reducer(state = { count: 1 }, action) {
  switch (action.type) {
    case 'count': {
      return { count: 2 };
    }
    default:
      return state;
  }
}

const logger1 = (store) => (next) => (action) => {
  console.log('****logger1 state****');
  console.log(store.getState());
  console.log('********');
  next(action);
  console.log('****logger1 after state****');
  console.log(store.getState());
  console.log('********');
};

const logger2 = (store) => (next) => (action) => {
  console.log('****logger2 state****');
  console.log(store.getState());
  console.log('********');
  next(action);
  console.log('****logger2 after state****');
  console.log(store.getState());
  console.log('********');
};

const logger3 = (store) => (next) => (action) => {
  console.log('****logger3 state****');
  console.log(store.getState());
  console.log('********');
  next(action);
  console.log('****logger3 after state****');
  console.log(store.getState());
  console.log('********');
};

const middleware = applyMiddleware(logger1, logger2, logger3);

const store = createStore(reducer, middleware);

store.dispatch({ type: 'count' });
