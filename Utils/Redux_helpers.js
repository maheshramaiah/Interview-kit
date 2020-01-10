const combineReducers = (reducers) => {
  return function(store, action) {
    return Object.keys(reducers).reduce((newState, key) => {
      newState[key] = reducers[key](store[key], action);

      return newState;
    }, {});
  };
};

const thunk = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    action(store.dispatch, store.getState);
  }

  return next(action); /* next -> logger */
};

const logger = (store) => (next) => (action) => {
  console.log(store.getState());
  next(action); /* next -> dispatch */
  console.log(store.getState());

  return action;
};

/*
middlewares = [thunk, logger]

compose(...middlewares)(store.dispatch)

output of compose -> thunk(logger(store.dispatch))

const logger1 = (next) => (action) => {
	console.log('logger1 before');
	next(action);
	console.log('logger1 after');
}
const logger2 = (next) => (action) => {
	console.log('logger2 before);
	next(action);
	console.log('logger2 after');
}

compose(logger1, logger2);
(dispatch) => logger1(logger2(dispatch))
dispatch =	logger1((action) => {
		console.log('logger2 before);
		dispatch(action);
		console.log('logger2 after);
	})
dispatch = (action) => {
	console.log('logger1 before);
	console.log('logger2 before);
	dispatch(action);
	console.log('logger2 after);
	console.log('logger1 after)
}

*/

const bindActionCreators = (actionCreators, dispatch) => {
  const actions = {};

  for (const key in actionCreators) {
    actions[key] = (...args) => dispatch(actionCreators[key](...args));
  }

  return actions;
};

function createStore(reducers, initialState, enhancer) {
  if (typeof initialState === 'function') {
    initialState = null;
    enhancer = initialState;
  }

  if (typeof enhancer === 'function') {
    return enhancer(createStore);
  }

  let currentState;

  function dispatch(action) {
    currentState = reducers(currentState, action);
  }

  function getState() {
    return currentState;
  }

  dispatch({ type: 'INIT' });

  return {
    getState,
    dispatch
  };
}

function applyMiddleware(...middlewares) {
  return (createStore) => {
    return (reducer, ...args) => {
      let dispatch = () => {};
      const store = createStore(reducer, ...args);
      const chain = middlewares.forEach((middleware) =>
        middleware({
          getState: store.getState,
          dispatch: (action, ...args) => dispatch(action, ...args)
        })
      );

      dispatch = compose(...chain)(store.dispatch);

      return {
        ...store,
        dispatch
      };
    };
  };
}
