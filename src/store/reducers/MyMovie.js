import { MY_MOVIE } from '../types';

const initState = {
  list: [],
}

export default function index(state = initState, action = null) {
  switch (action.type) {
    case MY_MOVIE:
      return {
        ...state,
        list: [...state.list ,action.payload],
      };
    default:
      return state;
  }
}
