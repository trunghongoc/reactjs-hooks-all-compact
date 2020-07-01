import axios from 'axios'
import { put, takeLatest } from 'redux-saga/effects'
import {
  GET_ASYNC_DATA
} from './../actions/actionTypes'
import { setData } from './../actions/api'

const runOurAction = function* () {
  let data
  yield axios.get('https://httpbin.org/json').then(response => {
    data = response.data
  })
  yield put(setData(data))
}

export function* getAsyncDataWatcher() {
  yield takeLatest(GET_ASYNC_DATA, runOurAction)
}
