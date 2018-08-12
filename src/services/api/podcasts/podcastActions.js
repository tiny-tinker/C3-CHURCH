import { createActions } from 'redux-actions';

const { getPodcasts } = createActions({
  GET_PODCASTS: () => ({})
});

export { getPodcasts };
