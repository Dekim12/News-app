import { takeLatest, call, put } from 'redux-saga/effects';
import {
  fetchAllData,
  fetchAllSources,
  fetchBySource,
  fetchByQuery,
} from '../../api';
import {
  requestFailed,
  requestPassedSuccessfully,
  setPrimaryData,
  setData,
} from '../actions';
import {
  API_CALL_REQUEST,
  SEARCH_SOURCE,
  SEARCH_REQUEST,
} from '../../constants';

function* initialRequestsSaga() {
  try {
    const response = yield call(fetchAllData);
    const { data } = response;
    const sourcesResponse = yield call(fetchAllSources);
    const sourcesData = sourcesResponse.data;

    yield put(setPrimaryData(data.articles, sourcesData.sources));
    yield put(requestPassedSuccessfully());
  } catch (error) {
    yield put(requestFailed(error));
  }
}

function* sourceRequestsSaga(action) {
  try {
    const response = yield call(fetchBySource, action.payload);
    const data = response.data.articles;

    yield put(setData(data));
    yield put(requestPassedSuccessfully());
  } catch (error) {
    yield put(requestFailed(error));
  }
}

function* searchRequestsSaga(action) {
  try {
    const response = yield call(fetchByQuery, action.payload);
    const data = response.data.articles;

    yield put(setData(data));
    yield put(requestPassedSuccessfully());
  } catch (error) {
    yield put(requestFailed(error));
  }
}

export function* watcherSaga() {
  yield takeLatest(API_CALL_REQUEST, initialRequestsSaga);
  yield takeLatest(SEARCH_SOURCE, sourceRequestsSaga);
  yield takeLatest(SEARCH_REQUEST, searchRequestsSaga);
}
