import { put, call, takeLatest, all } from 'redux-saga/effects';
import * as locationsApi from './visitApi';

export function* visitApiSubscriber() {
  yield all([takeLatest('GET_LOCATION_INFO', getLocationInfo)]);
}

export function* getLocationInfo(data) {
  try {
    const locationInfo = yield call(
      locationsApi.getLocationInfo,
      data.payload.data
    );
    yield put({
      type: 'GET_LOCATION_INFO_SUCCESS',
      locationInfo: locationInfo.data
    });
  } catch (error) {
    yield put({
      type: 'GET_LOCATION_INFO_FAILED',
      error
    });
  }
}
