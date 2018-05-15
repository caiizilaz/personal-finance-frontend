import {
  LOGIN,
  LOGOUT,
  AUTH,
} from '../actions/auth';

const initialState = {
  isAuth: false,
  username: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        isAuth: true,
        username: payload.username
      };
    case LOGOUT:
      return {
        isAuth: false,
        username: null
      };
    case AUTH:
      return {
        isAuth: true,
        username: payload.username
      };
    default:
      return state;
  }
}