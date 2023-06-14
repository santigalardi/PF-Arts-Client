import { GET_USERS, POST_ART, ADD_FAVORITE, DELETE_FAVORITE } from './actions';

const initialState = {
  arts: [],
  allUsers: [],
  Obras: [],
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };

    case POST_ART:
      return {
        ...state,
        arts: [...state.arts, action.payload],
      };

    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };

    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((fav) => fav.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default rootReducer;
