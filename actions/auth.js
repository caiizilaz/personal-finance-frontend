export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const AUTH = 'AUTH'

import { Actions } from 'react-native-router-flux'
import { AsyncStorage } from 'react-native'
import jwt_decode from 'jwt-decode'

export const login = (token) => {
  let { username } = jwt_decode(token)
  AsyncStorage.setItem('token', token)
  Actions.SETTING()
  return {
    type: LOGIN,
    payload: { username },
  }
}
export const logout = () => {
  AsyncStorage.removeItem('token');
  Actions.HOME()
  return {
    type: LOGOUT,
  }
}

export const auth = (token) => {
  let { username } = jwt_decode(token)
  return {
    type: AUTH,
    payload: { username },
  }
}