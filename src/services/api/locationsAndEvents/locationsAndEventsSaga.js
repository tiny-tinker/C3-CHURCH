import { put, call, takeLatest, all } from 'redux-saga/effects';
import * as LocationsApi from './locationsAndEventsApi';

export function* locationsApiSubscriber() {
  yield all([takeLatest('GET_LOCATIONS_AND_EVENTS', getLocationsAndEvents)]);
}

export function* getLocationsAndEvents() {
  try {
    let locationsAndEvents = yield call(LocationsApi.getLocationsAndEvents);
    locationsAndEvents = locationsAndEvents.data;
    yield put({ type: 'GET_LOCATIONS_AND_EVENTS_SUCCESS', locationsAndEvents });
  } catch (error) {
    yield put({ type: 'GET_LOCATIONS_AND_EVENTS_FAILED', error });
  }
}
