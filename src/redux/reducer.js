const initialState = {
  arts: [],

  myFavorites: [],

  allUsers:[],
  Obras:[],
  myFavorites:[],

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

      case 'GET_USER': 
        return{
            ...state,
            allUsers: action.payload
        };
        case 'ADD_FAVORITE':return{
            ...state,
            myFavorites:[
              ...state.allUsers.id,
              action.payload]
        };
        case 'DELETE_FAVORITE':return{
            ...state,
            myFavorites: state.myFavorites
            .filter(char=>char.id !== action.payload)
        };
    default:
      return state;
  }
};

export default rootReducer;
