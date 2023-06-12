import axios from 'axios';

export function postArts(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        'http://localhost:5173/create',
        payload
      );
      dispatch({ type: 'POST_ARTS_SUCCESS', payload: response.data });
      return response;
    } catch (error) {
      console.error(error);
    }
  };
}

// Acción para agregar un favorito
export function addFavorite(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        'http://localhost:5173/favorites/add',
        payload
      );
      dispatch({ type: 'ADD_FAVORITE_SUCCESS', payload: response.data });
      return response;
    } catch (error) {
      console.error(error);
    }
  };
}

// Acción para eliminar un favorito
export function deleteFavorite(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.delete(
        `http://localhost:5173/favorites/delete/${payload.id}`
      );
      dispatch({ type: 'DELETE_FAVORITE_SUCCESS', payload: response.data });

      const response = await axios.post('http://localhost:3001/create', payload);
      dispatch({ type: 'POST_ARTS_SUCCESS', payload: response.data });

      return response;
    } catch (error) {
      console.error(error);
    }
  };
}

export const getAllUser=()=>{
    return async function (dispatch) {
        const response = await axios ("https://jsonplaceholder.typicode.com/users");
        return dispatch({
            type: 'GET_USER',
            payload: response.data
        });
    };
};
// Acción para agregar un favorito
export const addFavorite = (name) => {
    return {
      type: 'ADD_FAVORITE',
      payload: name,
    };
  };
  
  // Acción para eliminar un favorito
  export const deleteFavorite = (id) => {
    return {
      type: 'DELETE_FAVORITE',
      payload: id,
    };
  };
