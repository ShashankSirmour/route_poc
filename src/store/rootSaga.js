import { all, fork } from 'redux-saga/effects';

import { routeSaga } from './route';

export default function* rootSaga() {
  yield all([routeSaga].map(fork));
}
