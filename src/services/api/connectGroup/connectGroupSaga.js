import { put, call, takeLatest, all } from 'redux-saga/effects';
import * as connectionGruopsApi from './connectGroupApi';

export function* connectGroupApiSubscriber() {
  yield all([takeLatest('GET_CONNECT_GROUPS', getConnectGroups)]);
}

export function* getConnectGroups() {
  try {
    const connectGroups = yield call(connectionGruopsApi.getConnectGroups);
    yield put({
      type: 'GET_CONNECT_GROUPS_SUCCESS',
      connectGroups: connectGroups.data
    });
  } catch (error) {
    yield put({
      type: 'GET_CONNECT_GROUPS_FAILED',
      error
    });
  }
}
