import { TOOGLE_MENU } from '../action/users';

const INITIAL_STATE = {
  toggleMenu: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOOGLE_MENU:
      return {
        ...state,
        toogleMenu: action.payload
      };
    default:
      return state;
  }
}
