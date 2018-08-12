import { createActions } from 'redux-actions';

const { getLocationsAndEvents } = createActions({
  GET_LOCATIONS_AND_EVENTS: () => ({})
});

export { getLocationsAndEvents };
