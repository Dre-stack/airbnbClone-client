import { AUTH_ERROR, LOAD_USER } from './types';
import axios from 'axios';
import setAxiosAuthHeader from '../utils/setAxiosAuthHeader';

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
export const createNewListing = async (data) => {
  try {
    const response = await axios.post('/api/listings/new', data);
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};
export const signupUser = async (data) => {
  try {
    const response = await axios.post('/api/users/signup', {
      ...data,
    });
    return response.data;
  } catch (err) {
    throw err.response.data;
  }
};

export const loadUser = () => async (dispatch) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    setAxiosAuthHeader(token);
  }
  try {
    const response = await axios.get('/api/users/me');

    dispatch({ type: LOAD_USER, payload: response.data.user });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};
