const intialState = {
  safe: [],
};
function safeReducer(state = intialState, action) {
  switch (action.type) {
    case "createSafe":
      return {
        ...state,
        safe: [
          ...state.safe,
          {
            safeName: action.payload.safename,
          },
        ],
      };
      break;
    default:
      return state;
  }
}

export default safeReducer;
