import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';

import {
  INIT_END_DATE_CHANGE,
  INIT_ROUTE_DATA_REQUEST,
  INIT_START_DATE_CHANGE,
} from '@store/actionTypes';
import axios from 'axios';
import {
  fetchRouteError,
  fetchRouteSuccess,
  setEndDateChange,
  setRouteLoading,
  setStartDateChange,
} from './actions';

const getData = () =>
  axios.get('data.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

export function findGreatestAndSmallestIndex(arr, target, smallest = false) {
  let low = 0;

  let high = arr.length - 1;
  while (low !== high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  if (smallest && low !== 0 && arr[arr.length - 1] > target) {
    return low - 1;
  }
  return low;
}

const geRouteData = (store) => store.route;
// worker saga: makes the api call when watcher saga sees the action
function* routeDataRequestWorker() {
  try {
    yield put(setRouteLoading());
    const response = yield call(getData);
    console.log('data:', response.data.at(0));

    // dispatch a success action to the store with logged in response
    const startTime = response?.data?.at(0)?.timestamp;
    const endTime = response?.data?.at(-1)?.timestamp;
    const timestampArray = response?.data?.map((d) => d.timestamp);
    yield put(
      fetchRouteSuccess({
        data: response.data,
        length: response?.data?.length || 0,
        startTime: (startTime && new Date(startTime)) || null,
        endTime: (endTime && new Date(endTime)) || null,
        timestampArray,
      }),
    );
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put(fetchRouteError());
  }
}

// worker saga: makes the api call when watcher saga sees the action
function* routeStartDateChangeWorker(payload) {
  try {
    // get start or end in param
    const { date } = payload;
    const dateTimestamp = date.getTime();
    const { timestampArray, data } = yield select(geRouteData);
    const startIndex = yield call(
      findGreatestAndSmallestIndex,
      timestampArray,
      dateTimestamp,
      true,
    );

    const startTime = data.at(startIndex).timestamp;

    // dispatch a success action to the store with logged in response
    yield put(
      setStartDateChange({
        startTime: (startTime && new Date(startTime)) || null,
        startIndex: startIndex || 0,
      }),
    );
  } catch (error) {
    // dispatch a failure action to the store with the error
    // yield put(fetchRouteError());
  }
}

// worker saga: makes the api call when watcher saga sees the action
function* routeEndDateChangeWorker(payload) {
  try {
    // get start or end in param
    const { date } = payload;
    const dateTimestamp = date.getTime();
    const { timestampArray, data } = yield select(geRouteData);
    const endIndex = yield call(
      findGreatestAndSmallestIndex,
      timestampArray,
      dateTimestamp,
      false,
    );

    const endTime = data.at(endIndex).timestamp;

    // dispatch a success action to the store with logged in response
    yield put(
      setEndDateChange({
        endTime: (endTime && new Date(endTime)) || null,
        endIndex: endIndex || data.length,
      }),
    );
  } catch (error) {
    // dispatch a failure action to the store with the error
    // yield put(fetchRouteError());
  }
}




// watcher saga: watches for actions dispatched to the store, starts worker saga
export default function* routeWatcherSaga() {
  yield takeLatest(INIT_ROUTE_DATA_REQUEST, routeDataRequestWorker);
  yield takeLatest(INIT_START_DATE_CHANGE, routeStartDateChangeWorker);
  yield takeLatest(INIT_END_DATE_CHANGE, routeEndDateChangeWorker);
}
