import { FETCH_USER_PENDING, FETCH_USER_FULFILLED } from '../action/users';

const INITIAL_STATE = {
  list: [],
  isLoading: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USER_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_USER_FULFILLED:
      return {
        ...state,
        list: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
}
