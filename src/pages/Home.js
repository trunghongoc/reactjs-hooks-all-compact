import React from 'react'
import {
  useSelector,
  useDispatch
} from 'react-redux'
import * as buttonAction from './../store/actions/button'
import * as sagaAction from './../store/actions/api'

const Home = ({ ahi = 'gì vậy mấy má ui' }) => {
  const dispatch = useDispatch()

  const counter = useSelector(state => state.button.counter)
  const increment = () => {
    dispatch(buttonAction.increment())
  }
  const descrement =() => {
    dispatch(buttonAction.descrement())
  }

  const apiData = useSelector(state => state.api)
  const getData = () => {
    dispatch(sagaAction.getAsyncData())
  }

  // const { author, date, title } = customeAsyncData

  return (
    <>
      <p>Home</p>

      <p data-testid="props-ahi">{ ahi }</p>

      <hr/>

      <button onClick={increment}>INCREMENT</button>
      <button onClick={descrement}>DESCREMENT</button>
      <p data-testid="counter-disp">Counter: {counter}</p>

      <hr/>
      <button
        onClick={getData}
        data-testid="saga-get-data">GET DATA FROM API</button>
      <p data-testid="saga-get-data-disp">{ JSON.stringify(apiData) }</p>
    </>
  )
}

export default Home
