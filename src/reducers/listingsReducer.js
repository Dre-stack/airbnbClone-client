import { NEW_LISTING } from '../actions/types';

const initial_state = {
  listing: null,
  searchedListings: null,
  loading: true,
};

export default (state = initial_state, action) => {
  const { type, payload } = action;
  switch (type) {
    case NEW_LISTING:
      return {
        ...state,
        listing: payload,
        loading: false,
      };

    default:
      return state;
  }
};
