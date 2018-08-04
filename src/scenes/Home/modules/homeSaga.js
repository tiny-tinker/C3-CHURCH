import {put, call, takeLatest, all} from 'redux-saga/effects';
import * as LocationsApi from './homeApi';

export function* locationsApiSubscriber() {
  yield all([takeLatest("GET_HOME_DYNAMIC_INFOS", getHomeDynamicInfos)]);
}

export function* getHomeDynamicInfos() {
  try {
    let homeDynamicInfos = yield call (LocationsApi.getHomeDynamicInfos);
    homeDynamicInfos = homeDynamicInfos.data;
    yield put ({type: "GET_HOME_DYNAMIC_INFOS_SUCCESS", homeDynamicInfos});
  } catch (error) {
    yield put ({type: "GET_HOME_DYNAMIC_INFOS_FAILED", error});
  }
}