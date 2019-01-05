import { FETCH_USER_PENDING, FETCH_USER_FULFILLED, FETCH_USER_REJECTED } from '../action/users';

const INITIAL_STATE = {
  list: [],
  error: false,
  isLoading: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USER_PENDING:
      return {
        ...state,
        error: false,
        isLoading: true
      };
    case FETCH_USER_FULFILLED:
      return {
        ...state,
        error: false,
        list: action.payload.data,
        isLoading: false
      };
    case FETCH_USER_REJECTED:
      return {
        ...state,
        list: [],
        error: true,
        isLoading: false
      };
    default:
      return state;
  }
}
