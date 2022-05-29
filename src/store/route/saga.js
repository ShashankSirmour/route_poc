import { call, put, takeLatest } from 'redux-saga/effects';

import { INIT_ROUTE_DATA_REQUEST } from '@store/actionTypes';
import axios from 'axios';
import { fetchRouteError, fetchRouteSuccess, setRouteLoading } from './actions';

const getData = () =>
  axios.get('data.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

// worker saga: makes the api call when watcher saga sees the action
function* courseRequestWorker() {
  try {
    yield put(setRouteLoading());
    const response = yield call(getData);
    console.log('data:', response.data.at(0));
    // dispatch a success action to the store with logged in response
    yield put(fetchRouteSuccess({ data: response.data }));
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(fetchRouteError());
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* authWatcherSaga() {
  yield takeLatest(INIT_ROUTE_DATA_REQUEST, courseRequestWorker);
}
