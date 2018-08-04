import { handleActions } from 'redux-actions';
import { getHomeDynamicInfos } from './homeActions';

const defaultState = {
  loading: false,
  error: null,
  homeDynamicInfos: {
    locations: null,
    featured: null
  }
};

const reducer = handleActions(
  {
    [getHomeDynamicInfos](state) {
      return {
        ...state,
        loading: true,
        error: null
      };
    },
    GET_HOME_DYNAMIC_INFOS_SUCCESS: (state, {homeDynamicInfos}) => ({
      ...state,
      loading: false,
      error: null,
      homeDynamicInfos
    }),
    GET_HOME_DYNAMIC_INFOS_FAILED: (state, {error}) => ({
      ...state,
      loading: false,
      error
    })
  }, defaultState
);

export default reducer;