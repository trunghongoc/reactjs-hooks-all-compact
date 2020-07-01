import {
  INCREMENT,
  DESCREMENT
} from './../actions/actionTypes'

const initialState = {
  counter: 0
}

const buttonReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 }
    case DESCREMENT:
      return { counter: state.counter - 1 }
    default:
      return state
  }
}

export default buttonReducer
