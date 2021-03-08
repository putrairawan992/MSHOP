import { LOADING_PROGRESS } from '../types';

export default function index(state = false, action = null) {
  switch (action.type) {
    case LOADING_PROGRESS:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}
