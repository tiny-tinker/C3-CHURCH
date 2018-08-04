import { createActions } from 'redux-actions';

const {
  getHomeDynamicInfos
} = createActions({
  GET_HOME_DYNAMIC_INFOS: () => ({})
});

export {getHomeDynamicInfos}