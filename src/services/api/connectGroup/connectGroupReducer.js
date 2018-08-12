import { handleActions } from 'redux-actions';
import { getConnectGroups } from './connectGroupActions';

const defaultState = {
  loading: false,
  error: null,
  connectGroups: null
};

const reducer = handleActions(
  {
    [getConnectGroups](state) {
      return {
        ...state,
        loading: true,
        error: null
      };
    },
    GET_CONNECT_GROUPS_SUCCESS: (state, { connectGroups }) => ({
      ...state,
      loading: false,
      error: null,
      connectGroups
    }),
    GET_CONNECT_GROUPS_FAILED: (state, { error }) => ({
      ...state,
      loading: false,
      error
    })
  },
  defaultState
);

export default reducer;
