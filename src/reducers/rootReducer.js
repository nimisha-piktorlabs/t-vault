const intialState = {
  counter: 0,
  name: "",
  user: [],
};

function rootReducer(state = intialState, action) {
  console.log(state);
  console.log(action.type);
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: state.counter + action.payload.inc,
        name: action.payload.name,
        user: [...state.user, action.payload.name + state.counter],
      };
    case "DECREMENT":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}

export default rootReducer;
