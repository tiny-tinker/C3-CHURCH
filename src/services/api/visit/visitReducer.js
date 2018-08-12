import { handleActions } from 'redux-actions';
import { getLocationInfo } from './visitActions';

const defaultState = {
  loading: false,
  error: null,
  locationInfo: null
};

const reducer = handleActions(
  {
    [getLocationInfo](state) {
      return {
        ...state,
        loading: true,
        error: null
      };
    },
    GET_LOCATION_INFO_SUCCESS: (state, { locationInfo }) => ({
      ...state,
      loading: false,
      error: null,
      locationInfo
    }),
    GET_LOCATION_INFO_FAILED: (state, { error }) => ({
      ...state,
      loading: false,
      error
    })
  },
  defaultState
);

export default reducer;
