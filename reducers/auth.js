import {
  LOGIN,
  LOGOUT,
} from '../actions/auth';
import { isSignedIn } from '../clientStore'

const initialState = {
  isAuth: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        isAuth: true,
      };
    case LOGOUT:
      return {
        isAuth: false,
      };
    default:
      return state;
  }
}