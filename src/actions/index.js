import { AUTH_ERROR, LOAD_USER, LOG_OUT } from './types';
import axios from 'axios';

export const signinUser = async (data) => {
  try {
    const response = await axios.post('/api/users/signin', {
      ...data,
    });
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/users/me');

    dispatch({ type: LOAD_USER, payload: response.data.user });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};
