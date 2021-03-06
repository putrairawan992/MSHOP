import { SORT_BY } from '../types';

const initState = {
  sortBy: 'popularity.desc',
}

export default function index(state = initState, action = null) {
  switch (action.type) {
    case SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
}
