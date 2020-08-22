import { LOAD_USER, AUTH_ERROR, LOG_IN } from '../actions/types';

const initial_state = {
  isLogedIn: false,
  user: null,
};
export default (state = initial_state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_USER:
      return {
        ...state,
        isLogedIn: true,
        user: payload,
      };

    case AUTH_ERROR:
      localStorage.removeItem('authToken');
      return {
        ...state,
        isLogedIn: false,
        user: null,
      };
    case LOG_IN:
      localStorage.setItem('authToken', payload);
      return {
        ...state,
        isLogedIn: true,
      };

    default:
      return state;
  }
};
