import { combineReducers, createStore } from 'redux'
import loginReducer from './reducers/login'
import registerReducer from './reducers/register'
import userReducer from './reducers/user'

const reducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
  user: userReducer,
})

export default createStore(reducers)