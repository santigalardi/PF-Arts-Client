const initialState = {
  arts: [],
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_ARTS_SUCCESS':
      return {
        ...state,
        arts: action.payload,
      };

    case 'ADD_FAVORITE_SUCCESS':
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };

    case 'DELETE_FAVORITE_SUCCESS':
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (fav) => fav.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default rootReducer;
