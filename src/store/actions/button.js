import {
  INCREMENT,
  DESCREMENT
} from './/actionTypes'

export const increment = payload => {
  return {
    type: INCREMENT
  }
}

export const descrement = payload => {
  return {
    type: DESCREMENT
  }
}
