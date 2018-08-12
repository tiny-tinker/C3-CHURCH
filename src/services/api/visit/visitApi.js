import { wrapRequest, xapi } from '../../utils';

const getLocationInfo = wrapRequest(async data => xapi.get('location/' + data));

export { getLocationInfo };
