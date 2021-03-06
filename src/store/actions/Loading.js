import { LOADING_PROGRESS } from '../types';

const setLoading = payload => ({
  type: LOADING_PROGRESS,
  payload
});

export default setLoading;
