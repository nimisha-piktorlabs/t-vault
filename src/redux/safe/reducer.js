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
            safename: action.payload.safename,
            owner: action.payload.owner,
            selectType: action.payload.selectType,
            description: action.payload.description,
          },
        ],
      };

    case "deleteSafe":
      // console.log("action payload", action.payload);
      return {
        ...state,
        safe: state.safe.filter((item, index) => index != action.payload),
      };

    case "updateSafe":
      let updatedSafeData = state.safe.map((safe, index) => {
        if (index == action.payload.index)
          return { ...safe, ...action.payload.values };
        else return safe;
      });
      console.log("updated data", updatedSafeData);

      return {
        ...state,
        safe: updatedSafeData,
      };

    default:
      return state;
  }
}

export default safeReducer;
