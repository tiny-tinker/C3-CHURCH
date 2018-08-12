import { wrapRequest, xapi } from '../../utils';

const getConnectGroups = wrapRequest(async () => xapi.get('connect_groups'));

export { getConnectGroups };
