const intialState = {
  safe: [],
  activeSafe: 0,
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
            secret: [],
          },
        ],
      };

    case "deleteSafe":
      console.log(" deleet action payload", action.payload);
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

      return {
        ...state,
        safe: updatedSafeData,
      };

    case "createSecret":
      let secretId = action.payload.index;
      let secretdatas = action.payload.secretData;
      let updatedSecretData = state.safe.map((s, index) => {
        if (index == secretId) {
          // const shallowCopy = Object.assign({}, s);
          // shallowCopy.secret.push(action.payload.secretData);
          // return shallowCopy;
          // console.log(index, "safe index found", action.payload.index);
          return {
            ...s,
            secret: [...s.secret, action.payload.secretData],
          };
        } else {
          return s;
        }
        // console.log(index, "not found", action.payload.index);
        // return safe;
      });

      return {
        ...state,
        safe: updatedSecretData,
      };
    case "getSecret":
      let safeindex = action.payload;

      // state.activeSafe = safeindex;
      return {
        ...state,
        activeSafe: safeindex,
      };
    default:
      return state;
  }
}

export default safeReducer;
