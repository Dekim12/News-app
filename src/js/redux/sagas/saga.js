import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchData, fetchSources } from '../../api';
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

    yield put(setPrimaryData(data.articles));
    yield put(requestPassedSuccessfully());
  } catch (error) {
    yield put(requestFailed(error));
  }
}

export function* watcherSaga() {
  yield takeLatest(API_CALL_REQUEST, workerSaga);
}
