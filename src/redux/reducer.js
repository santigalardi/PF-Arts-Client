const initialState = {
  arts: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_ARTS_SUCCESS":
      return {
        ...state,
        arts: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
