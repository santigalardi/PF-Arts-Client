import axios from 'axios';

export function postArts(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post('http://localhost:3001/create', payload);
      dispatch({ type: 'POST_ARTS_SUCCESS', payload: response.data });
      return response;
    } catch (error) {
      console.error(error);
    }
  };
}
