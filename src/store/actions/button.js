import {
  INCREMENT,
  DESCREMENT,
  SET_BUTTON_COUNTER
} from './/actionTypes'

export const increment = () => {
  return {
    type: INCREMENT
  }
}

export const descrement = () => {
  return {
    type: DESCREMENT
  }
}

export const setCounter = number => {
  console.log('-------ok:')
  return {
    type: SET_BUTTON_COUNTER,
    number
  }
}
