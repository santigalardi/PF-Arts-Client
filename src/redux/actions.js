import axios from 'axios';
import apiJSON from '../assets/Api/api.json';

export const GET_ARTS = 'GET_ARTS';
export const GET_ARTS_BY_TITLE = 'GET_ARTS_BY_TITLE';
export const GET_USERS = 'GET_USERS';
export const POST_ART = 'POST_ART';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';

export const getAllArts = () => {
  return async function (dispatch) {
    const response = apiJSON;
    return dispatch({
      type: GET_ARTS,
      payload: response.data,
    });
  };
};

export const getArtsByTitle = (title) => {
  return async function (dispatch) {
    const arts = (await axios.get(`${URL}?title=${title}`)).data;
    dispatch({ type: GET_ARTS_BY_TITLE, payload: arts });
  };
};

export const getAllUsers = () => {
  return async function (dispatch) {
    const response = await axios('https://jsonplaceholder.typicode.com/users');
    return dispatch({
      type: GET_USERS,
      payload: response.data,
    });
  };
};

export function postArts(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post('http://localhost:5173/create', payload);
      dispatch({ type: POST_ART, payload: response.data });
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
      const response = await axios.post('http://localhost:5173/favorites/add', payload);
      dispatch({ type: ADD_FAVORITE, payload: response.data });
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
      const response = await axios.delete(`http://localhost:5173/favorites/delete/${payload.id}`);
      dispatch({ type: DELETE_FAVORITE, payload: response.data });

      return response;
    } catch (error) {
      console.error(error);
    }
  };
}
