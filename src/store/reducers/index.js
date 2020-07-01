import button from './button'
import api from './api'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  button,
  api
})

export default rootReducer
