import {
  GET_ASYNC_DATA,
  SET_DATA
} from './actionTypes'

export const getAsyncData = () => {
  return {
    type: GET_ASYNC_DATA
  }
}

export const setData = payload => {
  return {
    type: SET_DATA,
    payload
  }
}
