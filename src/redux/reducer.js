

const initialState = {
  arts: [],
  allUsers:[],
  Obras:[],
  myFavorites:[],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_ARTS_SUCCESS":
      return {
        ...state,
        arts: action.payload,
      };
      case 'GET_USER': 
        return{
            ...state,
            allUsers: action.payload
        };
        case 'ADD_FAVORITE':return{
            ...state,
            myFavorites:[...state.allCharacters, action.payload]
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
