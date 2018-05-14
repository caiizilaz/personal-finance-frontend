import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import authReducer from './reducers/auth'

const reducers = combineReducers({
  auth: authReducer,
})

export default createStore(
  reducers,
  applyMiddleware(thunk)
)