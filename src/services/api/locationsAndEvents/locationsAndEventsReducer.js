import { handleActions } from 'redux-actions';
import { getLocationsAndEvents } from './locationsAndEventsActions';

const defaultState = {
  loading: false,
  error: null,
  locationsAndEvents: {
    locations: null,
    featured: null
  }
};

const reducer = handleActions(
  {
    [getLocationsAndEvents](state) {
      return {
        ...state,
        loading: true,
        error: null
      };
    },
    GET_LOCATIONS_AND_EVENTS_SUCCESS: (state, { locationsAndEvents }) => ({
      ...state,
      loading: false,
      error: null,
      locationsAndEvents
    }),
    GET_LOCATIONS_AND_EVENTS_FAILED: (state, { error }) => ({
      ...state,
      loading: false,
      error
    })
  },
  defaultState
);

export default reducer;
