import { wrapRequest, xapi } from '../../utils';

const getLocationsAndEvents = wrapRequest(async () => xapi.get('homedata'));

export { getLocationsAndEvents };
