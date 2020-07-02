import {
  INCREMENT,
  DESCREMENT,
  SET_BUTTON_COUNTER
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
    case SET_BUTTON_COUNTER:
        return { counter: action.number }
    default:
      return state
  }
}

export default buttonReducer
