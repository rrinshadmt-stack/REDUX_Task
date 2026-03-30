const { createStore, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
const logger = require("redux-logger").createLogger();

const increment = () => ({ type: "INCREMENT" });
const decrement = () => ({ type: "DECREMENT" });

const initialState = { count: 0 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger))
);

store.subscribe(() => {
  console.log("State:", store.getState());
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());