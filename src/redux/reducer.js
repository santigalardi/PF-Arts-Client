import {
  GET_ARTS,
  GET_USERS,
  POST_ART,
  ADD_FAVORITE,
  DELETE_FAVORITE,
  GET_DETAIL,
} from './actions';

const initialState = {
  allArts: [],
  allUsers: [],
  Obras: [],
  myFavorites: [],
  detail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTS:
      return {
        ...state,
        allArts: action.payload,
      };

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
        myFavorites: state.myFavorites.filter(
          (fav) => fav.id !== action.payload.id
        ),
      };

    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
