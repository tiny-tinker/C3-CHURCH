import { createActions } from 'redux-actions';

const { getLocationInfo } = createActions({
  GET_LOCATION_INFO: data => ({ data })
});

export { getLocationInfo };
