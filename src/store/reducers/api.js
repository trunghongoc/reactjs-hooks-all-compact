import {
  GET_ASYNC_DATA,
  SET_DATA
} from '../actions/actionTypes'

const initialState = {
  loading: false,
  payload: null
}

const apiReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ASYNC_DATA:
      return { ...state, loading: true }
    case SET_DATA:
      return { ...state, loading: false, payload: action.payload }
    default:
      return state
  }
}

export default apiReducer
