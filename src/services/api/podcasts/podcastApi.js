import { wrapRequest, xapi } from '../../utils';

const getPodcasts = wrapRequest(async () => xapi.get('podcasts'));

export { getPodcasts };
