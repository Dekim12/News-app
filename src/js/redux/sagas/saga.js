import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchData } from '../../api';
import {
  requestFailed,
  requestPassedSuccessfully,
  setPrimaryData,
} from '../actions';
import { API_CALL_REQUEST } from '../../constants';

function* workerSaga() {
  try {
    const response = yield call(fetchData);
    const { data } = response;
    console.log(data.sources);

    yield put(setPrimaryData(data.sources));
    yield put(requestPassedSuccessfully());
  } catch (error) {
    yield put(requestFailed(error));
  }
}

export function* watcherSaga() {
  yield takeLatest(API_CALL_REQUEST, workerSaga);
}
