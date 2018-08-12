import { put, call, takeLatest, all } from 'redux-saga/effects';
import * as podcastsApi from './podcastApi';

export function* podcastsApiSubscriber() {
  yield all([takeLatest('GET_PODCASTS', getPodcasts)]);
}

export function* getPodcasts() {
  try {
    const podcasts = yield call(podcastsApi.getPodcasts);
    yield put({
      type: 'GET_PODCASTS_SUCCESS',
      podcasts: podcasts.data
    });
  } catch (error) {
    yield put({
      type: 'GET_PODCASTS_FAILED',
      error
    });
  }
}
