import { LOAD_USER, AUTH_ERROR, LOG_IN } from '../actions/types';

const initial_state = {
  isLogedIn: false,
  user: null,
  loading: true,
};
export default (state = initial_state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_USER:
      return {
        ...state,
        isLogedIn: true,
        user: payload,
        loading: false,
      };

    case AUTH_ERROR:
      localStorage.removeItem('authToken');
      return {
        ...state,
        isLogedIn: false,
        user: null,
        loading: false,
      };
    case LOG_IN:
      localStorage.setItem('authToken', payload);
      return {
        ...state,
        isLogedIn: true,
        loading: false,
      };

    default:
      return state;
  }
};
