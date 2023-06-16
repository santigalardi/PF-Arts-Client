import axios from 'axios';
import apiJSON from '../assets/Api/api.json';

const URL = 'https://pf-arts-api-production.up.railway.app';

export const GET_ARTS = 'GET_ARTS';
export const GET_ARTS_BY_TITLE = 'GET_ARTS_BY_TITLE';
export const GET_USERS = 'GET_USERS';
export const FILTER_BY_ARTIST = 'FILTER_BY_ARTIST';
export const POST_ART = 'POST_ART';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const GET_DETAIL = 'GET_DETAIL';

export const getAllArts = () => {
  return async function (dispatch) {
    const response = await axios.get(`${URL}/artworks`);
    return dispatch({
      type: GET_ARTS,
      payload: response.data,
    });
  };
};

export const getArtsByTitle = (title) => {
  return async function (dispatch) {
    const arts = await axios.get(`${URL}/artworks?title=${title}`);
    console.log(arts.data); // Imprime la respuesta completa en la consola
    dispatch({ type: GET_ARTS_BY_TITLE, payload: arts.data });
  };
};

export const getAllUsers = () => {
  return async function (dispatch) {
    const response = await axios(`${URL}/users`);
    return dispatch({
      type: GET_USERS,
      payload: response.data,
    });
  };
};

export const filterByArtist = (payload) => {
  return { type: FILTER_BY_ARTIST, payload };
};

export function postArts(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${URL}/artworks`, payload);
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
      const response = await axios.post('/favorites/add', payload);
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
      const response = await axios.delete(`/favorites/delete/${payload.id}`);
      dispatch({ type: DELETE_FAVORITE, payload: response.data });

      return response;
    } catch (error) {
      console.error(error);
    }
  };
}

export const getDetail = (id) => {
  return async function (dispatch) {
    try {
      // Aquí realizas la lógica para obtener los detalles de la obra de arte por ID
      const detail = apiJSON.data.find((art) => art.id === id);
      dispatch({ type: GET_DETAIL, payload: detail });
    } catch (error) {
      console.error(error);
    }
  };
};
