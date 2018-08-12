import { handleActions } from 'redux-actions';
import { getPodcasts } from './podcastActions';

const defaultState = {
  loading: false,
  error: null,
  podcasts: null
};

const reducer = handleActions(
  {
    [getPodcasts](state) {
      return {
        ...state,
        loading: true,
        error: null
      };
    },
    GET_PODCASTS_SUCCESS: (state, { podcasts }) => ({
      ...state,
      loading: false,
      error: null,
      podcasts
    }),
    GET_PODCASTS_FAILED: (state, { error }) => ({
      ...state,
      loading: false,
      error
    })
  },
  defaultState
);

export default reducer;
