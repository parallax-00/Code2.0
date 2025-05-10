const initialState = { count: 0 };

const reducer = (action, state) => {
  switch (action.type) {
    case "increment":
      return {...state, count: state.count + 1 };
    case "decrement":
      return {...state, count: state.count - 1 };
    case "reset":
      return {...state, count: 0 };
    case "addVal":
      return {...state, count: state.count + action.payload };
    case "subVal":
      return {...state, count: state.count - action.payload };
    default:
  }
};
export { initialState, reducer };
