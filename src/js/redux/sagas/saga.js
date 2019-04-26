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
    const sourcesResponse = yield call(fetchSources);
    const sourcesData = sourcesResponse.data;

    yield put(setPrimaryData(data.articles, sourcesData.sources));
    yield put(requestPassedSuccessfully());
  } catch (error) {
    yield put(requestFailed(error));
  }
}

export function* watcherSaga() {
  yield takeLatest(API_CALL_REQUEST, workerSaga);
}
