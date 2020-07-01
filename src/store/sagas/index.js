import { all } from 'redux-saga/effects'
import { getAsyncDataWatcher } from './api'

export default function* rootSaga() {
  yield all([getAsyncDataWatcher()])
}
