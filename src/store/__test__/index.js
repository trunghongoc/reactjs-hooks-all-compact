// import configureMockStore from 'redux-mock-store'
// import rootReducer from './reducers'
// import createSagaMiddleware from 'redux-saga'
// import rootSaga from './../store/sagas'
// const sagaMiddleware = createSagaMiddleware()

// import * as buttonAction from './../actions/button'
// import * as sagaAction from './../actions/api'

// const middlewares = [sagaMiddleware]
// const mockStore = configureMockStore(middlewares)

// export default store

// mockStore = createStore


import { createStore, applyMiddleware } from 'redux'
import rootReducer from './../reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './../../store/sagas'
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  applyMiddleware(
    sagaMiddleware
  )
)
sagaMiddleware.run(rootSaga)

export default store
