import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import locationsAndEvents from './api/locationsAndEvents/locationsAndEventsReducer';
import podcastsReducer from './api/podcasts/podcastReducer';
import connectGroupReducer from './api/connectGroup/connectGroupReducer';
import visitReducer from './api/visit/visitReducer';

export default combineReducers({
  routing: routerReducer,
  locationsAndEvents: locationsAndEvents,
  podcasts: podcastsReducer,
  connectGroups: connectGroupReducer,
  visit: visitReducer
});
